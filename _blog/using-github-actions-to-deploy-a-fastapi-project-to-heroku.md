---
title: Using GitHub Actions to Deploy a FastAPI Project to Heroku
slug: "using-github-actions-to-deploy-a-fastapi-project-to-heroku"
description:
  Heroku makes deployment a piece of cake, but compromises on quality control &
  best practices. So, this article shows how to use GitHub Actions in tandem
  with Heroku while maintaining best practices.
coverImage:
  url: https://picsum.photos/id/2/5000/3333
  href: 13 combined with 12Hub & 2 is a match made in heaven.
---

# Using GitHub Actions to Deploy a FastAPI Project to Heroku

![Temporary cover image](https://picsum.photos/id/2/5000/3333)

**DISCLAIMER**: Heroku no longer supports their free tier (see this [FAQ][6] for
more clarification) and hence I cannpt guranteed the workflow suggested in this
article will work or not for your projects.

All my opensource projects are hosted on GitHub repositories and this is no
different for my backend Python project either. And thanks to [GitHub
Actions][1], I don't have to worry about Continuous Integration (CI) needs
either while [Heroku][2] takes care of my Continuous Deployment (CD) needs. But,
the main issue with Heroku is they do not provide a straightforward way to
deploy my projects using GitHub Actions. Instead, I am obligated to download the
[Heroku CLI][3] for all my deployment requirements!

I am not a fan of bloating my local development machine with unnecessary crap
which I may never use again (if I do not abandon a side project that is!). And
hence I needed a way to figure out how to make use of GitHub Actions to perform
all deployment tasks for me instead.

The idea is to commit changes on my local machine and push the latest changes to
the remote repository on GitHub. Further I usually configure GitHub Actions to
run a test suite on the lastest changes along with other tasks like code linting
& formatting. Deployment to Heroku should **ONLY** happen if all the configured
tasks pass. This is pretty standard practice & nothing fancy here.

The caveat though, Heroku uses `git` commands to push code to Heroku's remote.
So, it's pretty much like pushing code to a GitHub repository but, with no
robust CI/CD pipelines. I could configure Heroku to deploy when the tests &
other checks pass on GitHub but it is best to stick to standard practice &
configure everything under one roof.

On top of it, invoking `git` commands on a remote environment bring along its
own set of challenges & hence does not sound like a good idea to stick with.
Hence this article will shed some insight on the techniques I used to circumvent
this tricky situation. We'll be using GitHub Actions to configure a CI/CD
pipeline and [FastAPI][4] to build our hypothetical REST API.

So without further adieu, let's dive in & learn how to do it.

## Things to Know Before Deployment

Heroku's design reflects the need for simplicity & reducing complexity. Its
users are not expected to know in-depth CI/CD concepts & practices. But as long
as the users are well-acquainted with basic `git` commands, they are good to go
with sharing their backend projects with the world. In other words, deploying a
project to Heroku is as simple as pushing your code to a remote GitHub repo and
the rest is taken care of by Heroku's infrastructure!

You would develop your project & then push your code to the Heroku remote. It
triggers a build process which sets up a web server on their remote environments
to serve your API to the end-users.

There is a drawback to this process though, like Heroku's lack of a robust
enough CI/CD pipeline. And because of this drawback there is no way to keep a
check on any breaking changes or bugs which can be introduced during
development. As such, we need to use GitHub Actions for our CI/CD pipeline
instead. While discussing GitHub Actions is out-of-scope of this short article,
I recommend checking out the official documentations for more in-depth
explanation on this tool.

That said, we will be integrating the [`heroku-deploy`][5] Action to deploy the
project once the rest of the other checks pass. And the said Action is a NodeJS
wrapper around basic `git` command invocations. These invocations are exactly
like what you would use with Heroku instead.

Further, to keep things simple & to-the-point, our FastAPI app is a single file
with no more than 8 lines of code! Besides that, Heroku also requires some extra
files for the build process to work. And these files are also pushed to the
Heroku remote as well. They’re plain-text files with information for Heroku to
parse during the build phase. You’ll find more details about them later in the
article. Additionally, the `heroku-deploy` Action also requires an API key for
authentication so, ensure you've it along with the project's name.

With all the prerequisites ready and taken care of, let's develop the project
now.

## Putting Everything Together

### Our Simple FastAPI Project

In the previous section we setup some prerequisites for developing our simple
hypothetical FastAPI project and learned a bit about GitHub Actions as well as
Heroku. So, let's write our hypothetical FastAPI project now.

The source code is written in the `main.py` file. And is configured with routes
to return a set of JSON responses when queried. The said routes are; a `/` (_or
root_) route & a `/healthcheck` route. The latter of which has some significance
in our CI/CD pipeline as you'll see.

The root route returns a JSON response like this; `{"message": "Hello, World!"}`
when queried. And the `/healtchcheck` route acts as the last-line-of-defense for
the REST API. But it also returns a JSON response for better user
interpretation. So, if you invoke a `cURL` command to this route, you should get
back `{“message”: “Everything, OK!”}` response back.

We will configure our CI/CD pipeline to query the health-check route to check if
its still up and running. Failing to do so which means returning a `400` (_or
similar_) response code will invoke a roll-back. Hence, our REST API in
production will always be up & running regardless of any breaking changes or
bugs creeping in.

That said, here's what the source code for our REST API will look like:

```python
from fastapi import FastAPI, status

app = FastAPI()

@app.get('/')
def hello_world():
    '''
    The root route which returns a JSON response.

    The JSON response is delivered as:

    {
      'message': 'Hello, World!'
    }
    '''
    return {'message': 'Hello, World!'}

@app.get('/healthcheck', status_code=status.HTTP_200_OK)
def perform_healthcheck():
    '''
    Simple route for the GitHub Actions to perform healthchecks on.

    More info is available at:
    https://github.com/akhileshns/heroku-deploy#health-check

    It basically sends a GET request to the route & hopes to get a "200"
    response code. Failing to return a 200 response code just enables
    the GitHub Actions to rollback to the last version the project was
    found in a "working condition". It acts as a last line of defense in
    case something goes south.

    Additionally, it also returns a JSON response in the form of:

    {
      'healtcheck': 'Everything OK!'
    }
    '''
    return {'healthcheck': 'Everything OK!'}
```

### Configuring the GitHub Actions Workflow

With our REST API built, let's configure a CI/CD pipeline for it. The pipeline
is pretty standard & is nothing fancy. On every Push and/or PR events, it will
invoke a series of tests followed by code quality checks. And if everything
passes, the workflow will invoke the deployment process as well.

But before discussing more about our pipeline, let's learn a bit about GitHub
Actions.

Its easy to confuse GitHub Actions as "_yet another CI/CD tool_". But, it's not.
GitHub defines it as an automation tool for all software development needs one
can think of. And, there're many preconfigured Actions provided officially by
GitHub and/or the community as well. One such Action we'll use for our use case
is the `heroku-action` Action.

We’ll trigger our workflow on every push event. But you can configure it to
trigger on other events as well. You can find more info on the list of events
that triggers a workflow it's official documentation.

Workflows are further configured through YAML files. And, they're stored under
the `.github/workflows` directory which is also version controlled. GitHub will
parse these YAML files for instructions on how to set up the environment.

And here's what our workflow looks like:

```yml
# This is the .12hub/workflows/main.yml

name: Deploy # Name of the workflow

# Events that trigger a workflow:
# https://docs.github.com/en/actions/reference/events-that-trigger-workflows
on: push

jobs:
  # Check out the following article for more inspiration on setting up a
  # standard CI/CD pipeline for most Python projects:
  # https://jarmos.netlify.app/posts/a-standard-ci-cd-pipeline-for-python-projects/
  test:
  # Include your test suite here.
  lint:
  # Lint & format your code over here.
  deploy:
    # If the test & lint jobs don't pass,
    # the deploy job willn't even execute
    needs: [test, lint]
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Deploying to Heroku
        # More details available at:
        # https://github.com/akhileshns/heroku-deploy
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: "<PROJECT-NAME>"
          heroku_email: "<EMAIL-ADDRESS>"
          healthcheck: "https://<PROJECT-NAME>.herokuapp.com/healthcheck"
          rollbackonhealthcheckfailed: true
```

GitHub Actions workflows have to adhere to a specific syntax. And explaining the
syntax is a bit out of context of this article. So, you should refer to the
official docs for info to learn about the syntax instead.

That said, let's understand how we can customize our workflow.

At the top of our `main.yml` file is the name of the workflow signified with the
`name` keyword. It's followed by the `on` keyword which instructs GitHub Actions
to trigger the workflow on `push` events.

There're way more "_on event_" keywords available to trigger workflows. So, do
take a look at the documentation & configure your pipeline according to your
needs.

Continuing on, the `jobs` section of the workflow is pretty much the heart of
the pipeline. This is where GitHub will find instructions on which Actions to
trigger & when. For our needs, we defined 3 jobs & they'll run in parallel
unless explicitly configured not to do so.

The jobs are configured to run on the latest version of Ubuntu. And
additionally, the `deploy` job is dependent on the other previous jobs. So,
while the `test` & `linter` jobs run in parallel, the `deploy` job will wait
till they pass. And, if they don't, the `deploy` job willn’t even execute.

This structure of the pipeline ensures bugs are never introduced to production
hence ensuring quality standards of the source code. And if you want to know how
to set up a code quality check for Python projects, I've an article for you.
Check out
"[A Standard & Complete CI/CD Pipeline for Most Python Projects](./a-standard-ci-cd-pipeline-for-python-projects)"
to know how to set it up.

Diving deeper into the `deploy` job, let's figure out it's exact purpose.

Like its predecessors, the `deploy` job also runs on the latest version of
Ubuntu. Then it instructs GitHub to parse the steps for execution. Accordingly,
GitHub "_copies_" the contents of the repo in the virtual environment. Following
which the `heroku-deploy` Action is executed.

The `heroku-deploy` Action also requires a couple of variables to function. And
these variables are provided using the `with` keyword. The said Action accepts
more variables than what we're using. So, do check out it's repo for further
configuration.

That said, we're using the `heroku_api_key`, `heroku_app_name`, `heroku_email`,
`healthcheck` & `rollbackonhealthcheckfailed` variables. Since, the first 3
variables accept valuable user-info, they're passed in as GitHub Secrets. The
`healtcheck` variable accepts an URL to the `/healthcheck` route. And finally,
the `rollbackonhealthcheckfailed` accepts a boolean value.

The last variable helps us as the last-line-of-defence. Anytime an event
triggers workflow & the project deploys, a health-check will be performed. It'll
look for a `200` response code & if it fails, the workflow will revert back to a
previous working version!

Pretty nifty if you ask me!

But then, why do we need such complexity in the first place?

You see, in production environments it's common to have robust CI/CD pipeline(s)
in place. These systems test your commit pushes & PR for any potential
breakages. And not to forget coding best practices & quality standards as well.

The health-check & roll back features of the pipeline are there as a
last-line-of-defence. Since, it is possible for bugs and/or breaking changes to
pass the preliminary checks. And it could break our REST API in production.
Imagine what it would be like for your project’s users (_and they paid for using
it_)!

But fortunate for us, you needn't worry about such a scenario ever becoming a
reality. With the health-check & roll-back features, issues will turn back north
as quickly as it turned south. So, in other words, you get a good night's sleep
without any worry.

### About the `Procfile`, `requirements.txt` & `runtime.txt` Files

As mentioned earlier, Heroku requires certain plain-text files during the build
process. It parses these files to set up the web-server & the dependencies for
the project. So, for our REST API project which is a Python application,
following are the files Heroku needs to parse.

- The `Procfile` (_without a file extension_) which Heroku parses to set up a
  web-server on the remote machine. So, while using `uvicorn`, the contents of
  the file would be:
  `uvicorn main:app --host=0.0.0.0 --port=${PORT:-5000} --workers 4`.
- The `requirements.txt` lists project dependencies. And, Heroku will parse it
  to install the project's dependencies.
- The `runtime.txt` file states the specific Python version to use for our REST
  API. So, if it depends on Python v3.8.10, the contents of the file would be
  `python-3.8.10`. **Do note the format** & it has to be exactly similar else it
  won't work.

With these files, your build environment on Heroku should be up & running in no
time. But let's double check the directory structure before committing things to
version-control. Here's what your directory structure should look like:

```shell
example_project/          # Root directory for our project
├─ .github/
│  ├─ workflows/
│  │  ├─ main.yml         # Our Workflow file
├─ main.py                # Our FastAPI project
├─ Procfile               # Instructions for Heroku to setup 1
├─ requirements.txt       # Lists the dependencies of our project
├─ runtime.txt            # List the Python version our project depends on
```

Now, each time you push your changes to a GitHub repository, the push event will
trigger the workflow. And if the tests & code quality checks pass, the workflow
will try to deploy the project to Heroku. On top of it, if the health-check URL
returns a `200` response code back to our workflow, the REST API goes live!

You can then navigate to the `https://<PROJECT-NAME>.herokuapp.com` URL to check
out our REST API. If it’s working you should see a JSON response on the screen.

With this setup, now you’ve the best of both worlds. Simple deployment with
Heroku and robust code quality checks with GitHub Actions! And the best part of
it all, there was no need to use the Heroku on your local machine!

## Some Potential Roadblocks

While the techniques & code detailed out in this article works, it's not robust
enough. There're a couple of fragile areas in the `heroku-deploy` Action which
need to be taken care of. If you peruse through the source code, you’ll find
it's invoking actual `git` commands using NodeJS.

But, NodeJS wasn't meant to invoke shell commands so expect your CI/CD pipeline
to break if using this workflow. In other words, the Action used here is more of
a workaround than anything else! I will not recommending using the methods
suggested here for production usage.

A better solution to this problem would be to wrap an API provided by Heroku to
create an Action. And fortunate for us, appears to be some light at the other
end of this tunnel. Heroku provides an official API to interact with their build
process & other services. They named it Heroku Platform API. They even shared an
article to programmatically release code to Heroku using their Platform API.

So, a shout-out to JavaScript developers. If you're reading this & you're
experienced developing GitHub Actions workflows, the community needs you. But
till then, this article should be a good guideline for anyone wanting to deploy
their FastAPI app to Heroku.

There are other alternatives though. Google Serverless Infrastructure is one &
other provided by Microsoft Azure and/or Amazon Web Service. Until then cheers &
happy developing! 🥂

[1]: https://github.com/features/actions
[2]: https://www.heroku.com
[3]: https://devcenter.heroku.com/articles/heroku-cli
[4]: http://fastapi.tiangolo.com/
[5]: https://github.com/akhileshns/heroku-deploy
[6]: https://help.heroku.com/RSBRUH58/removal-of-heroku-free-product-plans-faq
