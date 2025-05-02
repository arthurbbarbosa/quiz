import React from 'react'

export default function EvenOrOdd({ onNext }) {
  const submit = (el) => {
    try {
      const result = eval(
        `${document.getElementById('answer').value};evenOrOdd(5);`
      )

      if (result === 'Odd') onNext(el)
      else
        alert(
          `Incorrect Answer! Code should return "Odd", but it returns ${result}`
        )
    } catch (err) {
      alert(err)
    }
  }

  return (
    <section className="animate-fade-in p-15">
      <h1 className="text-4xl font-black">First Challange: Even or Odd</h1>
      <p className="w-full max-w-full text-xl">
        Create a function that takes an integer as an argument and returns
        "Even" for even numbers or "Odd" for odd numbers.
      </p>

      <textarea
        id="answer"
        defaultValue="function evenOrOdd(number) {}"
        spellCheck="false"
        className="mt-5 h-96 w-full resize-none rounded-xl border-2 border-gray-100 p-5 font-mono outline-0"
      />

      <button
        onClick={submit}
        className="mt-5 w-full cursor-pointer rounded-lg bg-blue-500 py-2 text-2xl font-black text-white transition-colors hover:bg-blue-600"
      >
        Submit
      </button>
    </section>
  )
}
