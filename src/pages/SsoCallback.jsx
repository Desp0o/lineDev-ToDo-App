import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react'

export default function SSOCallback() {
  // Handle the redirect flow by rendering the
  // prebuilt AuthenticateWithRedirectCallback component.
  // This is the final step in the custom SAML flow.
  return <AuthenticateWithRedirectCallback />
}