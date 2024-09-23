## [Live Docs](https://exs-live-docs.vercel.app/)

[![preview](https://github.com/exslym/exs-live-docs/blob/main/public/preview.jpg)](https://exs-live-docs.vercel.app/)

  <div>
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="React" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Next_14-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=3178C6" alt="Next" />
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white&color=3178C6" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logoColor=white&logo=vercel&color=3178C6" alt="Vercel" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=3178C6" alt="Clerk" />
  </div>

### Vercel Deployment: [Live Docs](https://exs-live-docs.vercel.app/)

## <a name="introduction">🤖 Introduction</a>

Built with Next.js 14 to handle the user interface, Liveblocks for real-time features and styled with TailwindCSS, the application Live Docs is a clone of Goole Docs. The project uses React, TypeScript. The primary goal is to demonstrate the developer's skills in realtime enviroment that creates a lasting impact.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.JS
- TypeScript
- React
- Liveblocks
- Lexical Editor
- Tailwind CSS
- ShadCN
- Clerk.JS

## <a name="features">🔋 Features</a>

👉 **Authentication with Clerk:** User authentication using GitHub, Google or LinkedIn through Clerk, ensuring secure and efficient authentication.

👉 **Collaborative Text Editor:** Multiple users can edit the same document simultaneously with real-time updates.

👉 **Documents Management**

- **Create Documents:** Users can create new documents, which are automatically saved and listed.
- **Delete Documents:** Users can delete documents they own.
- **Share Documents:** Users can share documents via email or link with view/edit permissions.
- **List Documents:** Display all documents owned or shared with the user, with search and sorting functionalities.

👉 **Comments:** Users can add inline and general comments, with threading for discussions.

👉 **Active Collaborators on Text Editor:** Show active collaborators with real-time presence indicators.

👉 **Notifications:** Notify users of document shares, new comments, and collaborator activities.

👉 **Responsive:** The application is responsive across all devices.

and many more, including code architecture and reusability

## <a name="installation">⚙️ Installation</a>

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & LiveBlocks credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/) and [Liveblocks](https://liveblocks.io/) website.

#
