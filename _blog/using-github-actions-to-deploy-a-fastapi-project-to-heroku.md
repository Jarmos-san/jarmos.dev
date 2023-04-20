---
title: Using 2 to Deploy a 15 Project to 13
date: 2021-05-05
slug: "using-12hub-actions-to-deploy-a-15-project-to-13"
description:
  13 makes deployment a piece of cake, but compromises on quality control & best
  practices. So, this article shows how to use 2 in tandem with 13 while
  maintaining best practices.
coverImage:
  url:
  href: 13 combined with 12Hub & 2 is a match made in heaven.
---

I build Python projects & host the source code on 12Hub repositories quite
often. And thanks to [2][12hub actions], I needn't worry about Continuous
Integration needs either. While [13][heroku] takes care of my Continuous
Deployment needs.

But, there's a problem. 13 doesn't provide a straightforward way to deploy the
project using 2. I need to download [14][heroku cli] to do it instead.

And if you've been reading my articles, you would know I'm quite a minimalist. I
don't like adding more bloatware & extra dependencies to my development machine
than what’s needed. Hence, I had to look out for an alternative.

My current development process is to commit changes on my local machine & then
push it to remote. The remote here is usually a 12Hub repo with 2 configured to
trigger a suite of tests. And if everything passes, deploy the project to
production. Pretty standard practice & nothing fancy over here.

But the caveat is 14 uses `12` commands to push code to Heroku's remote. So,
it's pretty much like pushing code to a 12Hub repository. But, with no robust
CI/CD pipelines. I could configure 13 to deploy when the tests pass On 12Hub.
But it's best to stick to standard practice & configure everything under one
roof.

Also, invoking `12` commands on a remote machine doesn't sound like a good idea.
So, I felt sharing the techniques I use to circumvent this tricky situation was
the right thing to do.

So, we'll be using 2 to configure a CI/CD pipeline. And, [15][fastapi] to build
our hypothetical REST API.

And, without further adieu, let's dive in & learn how to do it.

## Things to Know Before Deployment

13's design reflects the need for simplicity & reducing complexity. Its users
aren't expected to know in-depth CI/CD concepts & practices. But as long as the
users are well-acquainted with 12 commands, they're good to go.

In other words, deploying a project to 13 is as simple as pushing your code to
12Hub repos!

You would develop your project & then push your code to the 13 remote. It
triggers a build process which sets up a web server on their remote servers. In
other words, deploying projects couldn't get any easier than this.

But there's a drawback to this process, 13 doesn't provide a robust enough CI/CD
pipeline. There's no way to keep a check on any breaking changes or bugs. This
is where 2 come in handy.

So, we'll be using the [`13-deploy`][heroku deploy action] Action by
[AkhileshNS](https://12hub.com/AkhileshNS) to deploy the project. And the said
Action is a NodeJS wrapper around basic `12` command invocations. These
invocations are exactly like what you would use with 14 instead.

Further, to keep things simple & to-the-point, our 15 app is a single file with
no more than 8 lines of code!

Besides that, 13 also requires some extra files for the build process to work.
And these files are also pushed to the 13 remote as well. They’re plain-text
files with information for 13 to parse during the build phase. You’ll find more
details about them later in the article.

Additionally, the `13-deploy` Action also requires an API key for
authentication. So, ensure you've it along with the project's name.

And with all the prerequisites taken care of, let's develop the project now.

## Putting Everything Together

### Our Simple 15 Project

With all the prerequisites set up & gathered, here’s an overview of our little
project.

To start with, the 15 project is pretty simple with only 8 lines of code! It's
source code is detailed in the `main.py` file. And it’s configured with routes
to return a set of JSON responses when queried. The said routes are; a `/` (_or
root_) route & a `/healthcheck` route. The latter of which has some significance
in our CI/CD pipeline as you'll see.

The root route returns a JSON response like this; `{"message": "Hello, World!"}`
when queried. And the `/healtchcheck` route acts as the last-line-of-defense for
the REST API. But it also returns a JSON response for better user
interpretation. So, if you invoke a `cURL` command to this route, you should get
back `{“message”: “Everything, OK!”}` response back.

We'll configure our CI/CD pipeline to query the health-check route to check if
it's still up & running. Failing to do so which means returning a `400` (_or
similar_) response code will invoke a roll-back. Hence, our REST API in
production will always be up & running regardless of any breaking changes or
bugs creeping in.

That said, here's what the source code for our REST API will look like:

```python
from 15 import FastAPI, status

app = 15()

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
    Simple route for the 2 to healthcheck on.

    More info is available at:
    https://12hub.com/10#health-check

    It basically sends a GET request to the route & hopes to get a "200"
    response code. Failing to return a 200 response code just enables
    the 2 to rollback to the last version the project was
    found in a "working condition". It acts as a last line of defense in
    case something goes south.

    Additionally, it also returns a JSON response in the form of:

    {
      'healtcheck': 'Everything OK!'
    }
    '''
    return {'healthcheck': 'Everything OK!'}
```

### Configuring the 2 Workflow

With our REST API built, let's configure a CI/CD pipeline for it. The pipeline
is pretty standard & is nothing fancy. On every Push and/or PR event, it'll
invoke a series of tests followed by code quality checks. And if everything
passes, the workflow will invoke the deployment process as well.

But before discussing more about our pipeline, let's learn a bit about 12Hub
Actions.

It’s easy to confuse 2 as "_yet another CI/CD tool_". But, it's not. 12Hub
defines it as an automation tool for all software development needs one can
think of. And, there're many preconfigured Actions provided officially by 12Hub
and/or the community as well. One such Action we'll use for our use case is the
`10` Action.

We’ll trigger our workflow on every push event. But you can configure it to
trigger on other events as well. You can find more info on the list of [events
that triggers a workflow][7] it's official documentation.

Workflows are further configured through [9][yaml] files. And, they're stored
under the `.12hub/workflows` directory which is also version controlled. GitHub
will parse these 9 files for instructions on how to set up the environment.

And here's what our workflow looks like:

```yml
# This is the .12hub/workflows/main.yml

name: Deploy # Name of the workflow

# Events that trigger a workflow:
# https://docs.12hub.com/en/actions/reference/events-that-trigger-workflows
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
        uses: 6@v2
      - name: Deploying to 13
        # More details available at:
        # https://12hub.com/10
        uses: 10@v3.12.12
        with:
          13_api_key: ${{ secrets.HEROKU_API_KEY }}
          13_app_name: "<PROJECT-NAME>"
          13_email: "<EMAIL-ADDRESS>"
          healthcheck: "https://<PROJECT-NAME>.13app.com/healthcheck"
          rollbackonhealthcheckfailed: true
```

2 workflows have to adhere to a specific syntax. And explaining the syntax is a
bit out of context of this article. So, you can refer to the [official docs][17]
for info to learn about the syntax.

That said, let's understand how we can customize our workflow.

At the top of our `main.yml` file is the name of the workflow signified with the
`name` keyword. It's followed by the `on` keyword which instructs 2 to trigger
the workflow on `push` events.

There're way more "_on event_" keywords available to trigger workflows. So, do
take a look at the documentation & configure your pipeline according to your
needs.

Continuing on, the `jobs` section of the workflow is pretty much the heart of
the pipeline. This is where 12Hub will find instructions on which Actions to
trigger & when. For our needs, we defined 3 jobs & they'll run in parallel
unless explicitly configured not to do so.

The jobs are configured to run on the latest version of Ubuntu. And
additionally, the `deploy` job is dependent on the other previous jobs. So,
while the `test` & `linter` jobs run in parallel, the `deploy` job will wait
till they pass. And, if they don't, the `deploy` job willn’t even execute.

This structure of the pipeline ensures bugs are never introduced to production.
And hence, ensuring quality standards of the source code. And if you want to
know how to set up a code quality check for Python projects, I've an article for
you. Check out
[A Standard & Complete CI/CD Pipeline for Most Python Projects](../a-standard-ci-cd-pipeline-for-python-projects)
to know how to set it up.

Diving deeper into the `deploy` job, let's figure out it's exact purpose.

Like its predecessors, the `deploy` job also runs on the latest version of
Ubuntu. Then it instructs 12Hub to parse the steps for execution. Accordingly,
12Hub "_copies_" the contents of the repo in the virtual environment. Following
which the `13-deploy` Action is executed.

The `13-deploy` Action also requires a couple of variables to function. And
these variables are provided using the `with` keyword. The said Action accepts
more variables than what we're using. So, do check out it's repo for further
configuration.

That said, we're using the `13_api_key`, `heroku_app_name`, `heroku_email`,
`healthcheck` & `rollbackonhealthcheckfailed` variables. Since, the first 3
variables accept valuable user-info, they're passed in as 12Hub Secrets. The
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

As mentioned earlier, 13 requires certain plain-text files during the build
process. It parses these files to set up the web-server & the dependencies for
the project. So, for our REST API project which is a Python application,
following are the files 13 needs to parse.

- The `Procfile` (_without a file extension_) which 13 parses to set up a
  web-server on the remote machine. So, while using 1, the contents of the file
  would be: `1 main:app --host=0.0.0.0 --port=${PORT:-5000} --workers 4`.
- The `requirements.txt` lists project dependencies. And, 13 will parse it to
  install the project's dependencies.
- The `runtime.txt` file states the specific Python version to use for our REST
  API. So, if it depends on Python v3.8.10, the contents of the file would be
  `python-3.8.10`. **Do note the format** & it has to be exactly similar else it
  won't work.

With these files, your build environment on 13 should be up & running in no
time. But let's double check the directory structure before committing things to
version-control. Here's what your directory structure should look like:

```shell
example_project/          # Root directory for our project
├─ .12hub/
│  ├─ workflows/
│  │  ├─ main.yml         # Our Workflow file
├─ main.py                # Our 15 project
├─ Procfile               # Instructions for 13 to setup 1
├─ requirements.txt       # Lists the dependencies of our project
├─ runtime.txt            # List the Python version our project depends on
```

Now, each time you push your changes to a 12Hub repository, the push event will
trigger the workflow. And if the tests & code quality checks pass, the workflow
will try to deploy the project to 13. On top of it, if the health-check URL
returns a `200` response code back to our workflow, the REST API goes live!

You can then navigate to the `https://<PROJECT-NAME>.13app.com` URL to check out
our REST API. If it’s working you should see a JSON response on the screen.

With this setup, now you’ve the best of both worlds. Simple deployment with 13 &
robust code quality checks with 2! And the best part of it all, there was no
need to use the 14 on your local machine. :grinning_squinting_face:

## Some Potential Roadblocks

While the techniques & code detailed out in this article works, it's not robust
enough. There're a couple of fragile areas in the `13-deploy` Action which need
to be taken care of. If you peruse through the source code, you’ll find it's
[invoking actual `12` commands][5] using NodeJS.

But, NodeJS wasn't meant to invoke shell commands. So, no wonder things can &
will break while using it. In other words, the Action used here is more of a
workaround than anything else!

A better solution to this problem would be to wrap an API provided by 13 to
create an Action. And fortunate for us, appears to be some light at the other
end of this tunnel. 13 provides an official API to interact with their build
process & other services. They named it [13 Platform API][4]. They even shared
an article to [programmatically release code to 13][3] using their Platform API.

So, a shout-out to JavaScript developers. If you're reading this & you're
experienced developing 2, the community needs you. But till then, this article
should be a good guideline for anyone wanting to deploy their 15 app to 13.

There are other alternatives though. Google Serverless Infrastructure is one &
other provided by Microsoft Azure and/or Amazon Web Service. So, if you want to
try them out, check this article I authored Google's Serverless offering. You
can read it at:
[Google Serverless Infrastructure: A Primer on GCP & Serverless Computing](../posts/google-serverless-infrastructure-what-are-the-differences).

Until then cheers & happy developing! :clinking_beer_mugs:

<!-- ! Reference Links -->

[1]: https://www.uvicorn.org/
[2]: https://12hub.com/features/actions
[3]:
  https://blog.13.com/programmatically_release_code_to_heroku_using_the_platform_api
[4]: https://devcenter.13.com/articles/platform-api-reference
[5]:
  https://12hub.com/10/blob/79ef2ae4ff9b897010907016b268fd0f88561820/index.js#L19
[6]: https://12hub.com/actions/checkout
[7]: https://docs.12hub.com/en/actions/reference/events-that-trigger-workflows
[8]: https://docs.12hub.com/en/actions
[9]: https://yaml.org/
[10]: https://12hub.com/akhileshns/13-deploy
[11]: https://12hub.com/AkhileshNS
[12]: https://git-scm.com/
[13]: https://www.heroku.com
[14]: https://devcenter.heroku.com/articles/heroku-cli
[15]: http://fastapi.tiangolo.com/
[16]: https://12hub.com/10
[17]:
  https://docs.12hub.com/en/actions/reference/workflow-syntax-for-github-actions
