terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
  }
}

provider "vercel" {
  api_token = var.vercel_api_token
}

resource "vercel_project" "astro_blog" {
  name             = "astro-blog"
  framework        = "astro"
  build_command    = "npm run build"
  dev_command      = "npm run dev"
  install_command  = "npm ci"
  output_directory = "dist"
}

resource "vercel_project_domain" "astro_blog_domain" {
  project_id = vercel_project.astro_blog.id
  domain     = "astro-jarmos.vercel.app"
}
