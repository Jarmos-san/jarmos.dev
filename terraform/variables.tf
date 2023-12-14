variable "vercel_api_token" {
  type        = string
  description = "The Vercel secret access token for authenticating to Vercel services."
  nullable    = false
  sensitive   = true
}
