<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<!-- TODO -->
<!-- PAGES
*landing
*home
*members
*invite
*login
*sign-up
*onboarding
*profile

-->

<!-- LANDING
*if !isAuthenticated ? Two buttons(signup and login) in the header :
redirect to /home

Components:
*Button
*Maybe a header
-->

<!-- HOME
  PROTECTED PAGE
content: a "Welcome Home" text

Components:
*Sidebar
*Typography
-->

<!-- MEMBERS
PROTECTED PAGE
content:
*create an invite link that expires in 24h
*list of all members
Components:
*Sidebar
*LinkGenerator
*Member
*MemberList
-->

<!-- INVITE
  content: an "would you like to join this organization?" question and two buttons for an answer.
*invite link leads user here.
*check if user is in our DB if not, let them signup
-->

<!-- LOGIN
Component:
*Login/SignUp form

content: redirect to /onboarding if user has no organization
-->

<!-- SIGN UP
content: redirect fresh sign ups to /onboarding
*user signs up from an invite link, redirect them to /home
-->

<!-- ONBOARDING
content: create profile(with your name)
*create an org
-->

<!-- PROFILE
content:
*edit profile
*view org list, switch between orgs, sign out, delete account
-->

<!-- Loading spinner in loading state.
show errors when something goes wrong.
*logged in but aborts the onboarding flow;when they log back in, they should be redirected to complete the onboarding flow
 *hiding sensitive details about the profile
*try redirecting the user to just "/profile"-->
