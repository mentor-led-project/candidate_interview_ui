This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Candidate Interview App

An interactive web app built with Next.js, TypeScript, and Firebase that simulates a tech interview for candidates based on selected professional fields.

### Features

- 🔍 5 Tech Fields (e.g., Frontend, Backend, DevOps, etc.)
- 🎯 5 Random Questions per field (e.g., Frontend includes React, JS, HTML, etc.)
- ⏱️ 60-second Countdown Timer per question
- ✅ Multiple Choice Questions (MCQs)
- 📊 Score Summary at the end
- 🔥 Fetched in real-time from Firebase Firestore
- 💅 Clean and responsive external CSS styling

### Tech Stack

- Next.js
- Tyescript
- Firebase
- CSS

#### How It Works

- Select a Tech Field on the homepage.
- Fetch 5 random questions related to that field from Firestore.
- For each question:
- Show options
- Start a 60-second timer
- User selects an answer and clicks Next
- After 5 questions:
- Show final score

**Hint: show correct answers wwhen selected answers are incorrect**

##### Timer Logic

Each question has a 60-second countdown. When the timer reaches 0, the app:

- Locks the current question
- Moves to the next question automatically marks unanswered if no option was selected

###### Scoring System

- Each correct answer = ✅ 1 mark
- Incorrect/unanswered = ❌ 0 mark
- Total score shown as X / 5 at the end

```bash
git clone 'https://github.com/mentor-led-project/candidate_interview_ui.git'
cd candidate-interview
npm install
npm run dev

```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
