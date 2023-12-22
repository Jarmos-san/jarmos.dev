variable "vercel_api_token" {
  type        = string
  description = "The Vercel secret access token for authenticating to Vercel services."
  nullable    = false
  sensitive   = true
}

variable "vercel_project_name" {
  type        = string
  description = "The name of the project to showcase on the Vercel dashboard"
  nullable    = false
  default     = "personal-website"
}

variable "domain_name" {
  type        = string
  description = "The domain name to assign to the project when it is deployed to production"
  nullable    = false
  default     = "jarmos.dev"
}

variable "framework_name" {
  type        = string
  description = "The framework used to develop the project, examples are: Next.js, Hugo, Astro and so on"
  nullable    = false
  default     = "astro"
}

variable "project_source" {
  type        = string
  description = "The path on the filesystem to the project's source code"
  nullable    = false
  default     = "../web"
}
