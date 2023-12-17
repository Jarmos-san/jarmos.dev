# Terraform, Deployment and Infrastructure Documentations

**NOTE**: The Terraform setup is still **WORK-IN-PROGRESS**!

The contents of this README contain the source code to work with Terraform which
in turn is responsible for a clean management of the deployment and
infrastructure provisioning of the project. The directory has the following
structure:

```console
.
├── .terraform.lock.hcl
├── README.md
├── main.tf
├── variables.tf
└── output.tf
```

And the purpose of each of the files shown above are as follows:

- `.terraform.lock.hcl` keeps track of the
  [Terraform Providers](https://developer.hashicorp.com/terraform/registry/providers)
  and its version constraints in a lockfile.
- `README.md` is the documentation file which you're currently reading from.
- `main.tf` is the entrypoint which Terraform will automatically identify before
  provisioning the infrastructure.
- `variables.tf` is where various variables and its type are initialised (and
  not necessarily defined) for use across the rest of the Terraform source code.
- `output.tf` is where Terraform will find the necessary instructions to output
  information to `STDOUT` for usage elsewhere, perhaps in a third-party tool or
  someother automation tool.

For more information on using Terraform, I strongly recommend checking out their
[official documentations](https://developer.hashicorp.com/terraform).

## Usage Guidelines

There's no requirement to directly invoke Terraform since a task runner takes
care of it already (see the [`Taskfile.yml`](../Taskfile.yml) to get an idea of
the Terraform commands). But in case a niche requirement arises which the task
runner couldn't deal with, this document will serve as a source of reference.

**NOTE**: Ensure Terraform is locally installed before any of the following
instructions would work. The
[official instructions guidelines](https://developer.hashicorp.com/terraform/install)
will help you have Terraform installed on your local system correctly.

1. To initialise and setup the environment for Terraform, run this command;

```
terraform init
```

2. After making the necessary changes to the Terraform source code, run the
   following command which should perform a "dry-run" to show what
   infrastructural changes Terraform would make before deploying the project;

```console
terraform plan
```

3. If you're satisfied with the changes Terraform will make, apply the changes
   by running this command;

```console
terraform apply
```

4. For deleting the infrastructural resources and removing the deployment, run
   the following command (be **CAUTIOUS** of this command btw!);

```console
terraform destroy
```

If you need more help learning to use the CLI command, feel free to start a
discussion thread or even better, refer to the
[official documentations](https://developer.hashicorp.com/terraform/cli).

## "Terraform is Overkill for the Project!"

If you wondering why I use Terraform for such a "_simple task_" this section of
the document will probably answer your questions and doubts.

First off, this project is in no way "_simple_" and easy to deploy especially as
it has grown in size and complexity over time. Vercel or any of cloud provider's
builtin "_build infrastructure_" are often too straightforward. They will invoke
a build process for **ANY** changes pushed to a set branch (for example the
`main` branch)! This caused some issues with my workflow, my website has broken
down a couple of times years ago. And I want to avoid such a situation by
**ONLY** running the deployment process when all quality-assurances and tests
passes. And Terraform simply makes this process easier, uniform and manageable
for me instead of writing hacky scripts to interact with the service provider's
API!

Secondly, I want to avoid vendor lock-in as much as possible and be able to
migrate to any other cloud provider when needed. The reasons to do so could be
manifold like perhaps I just need a more beefier VPS instead of a static-site
deployment or maybe I just don't like Vercel's service anymore or something else
totally! Terraform allows me to do it in an uniform manner with its programmatic
UI/UX. The icing on the cake is the fact I can even version-control the
configurations for the future if there's ever a need for one!

Third, being able to manage the deployment and the infrastructure from my
favoured development environment i.e the CLI is a huge plus for me! It improves
my productivity exponentially and I wouldn't mind the extra complexity Terraform
brings to the table as a compromise!
