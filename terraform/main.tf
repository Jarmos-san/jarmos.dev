terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 3.0"
    }
  }
  backend "pg" {}
}

provider "vercel" {
  api_token = var.vercel_api_token
}

data "vercel_project_directory" "personal_website" {
  path = var.project_source
}

resource "vercel_project" "personal_website" {
  name      = var.vercel_project_name
  framework = var.framework_name
}

resource "vercel_deployment" "personal_website" {
  project_id  = vercel_project.personal_website.id
  files       = data.vercel_project_directory.personal_website.files
  path_prefix = data.vercel_project_directory.personal_website.path
  production  = true
}

resource "vercel_project_domain" "personal_website" {
  project_id = vercel_project.personal_website.id
  domain     = var.domain_name
}

resource "vercel_project_domain" "redirect_rules" {
  project_id = vercel_project.personal_website.id
  domain     = "jarmos.vercel.app"

  redirect             = vercel_project_domain.personal_website.domain
  redirect_status_code = 307
}
