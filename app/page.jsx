'use client'
import React from 'react'

import EvenOrOdd from '../components/questions/even-or-odd.jsx'
import EmojiFall from '../components/emoji-fall.jsx'

export default function Page() {
  const [question, setQuestion] = React.useState(0)

  const nextQuestion = (el) => {
    el.target.parentNode.classList.add('animate-fade-out')
    setTimeout(() => setQuestion(question + 1), 1000)
  }

  switch (question) {
    case 0:
      return (
        <section className="flex h-screen w-screen animate-fade-in flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-black">
            Welcome to the Javascript Developer Test
          </h1>
          <p className="text-2xl">
            Take the ultimate test for any javascript developer.
          </p>

          <button
            onClick={nextQuestion}
            className="mt-5 cursor-pointer rounded-lg bg-blue-500 px-10 py-2 text-2xl font-black text-white transition-colors hover:bg-blue-600"
          >
            Start Now
          </button>
        </section>
      )
    case 1:
      return <EvenOrOdd onNext={nextQuestion} />
    case 2:
      return (
        <section className="flex h-screen w-screen animate-fade-in flex-col items-center justify-center text-center">
          <EmojiFall />
          <h1 className="text-4xl font-black">
            Congratulations! You have completed the test
          </h1>
          <p className="text-2xl">
            You got {question - 1}/{question - 1} questions right with flying
            colors.
          </p>

          <button
            onClick={() => setQuestion(0)}
            className="mt-5 cursor-pointer rounded-lg bg-blue-500 px-10 py-2 text-2xl font-black text-white transition-colors hover:bg-blue-600"
          >
            Do Again
          </button>
        </section>
      )
  }
}
