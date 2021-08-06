# <p align="center">custom-hooks</p>

### <p align="center">The library that makes the most popular or complex functions into simple hooks for daily use<p>

<br />
<p>Include popular hooks in your React projects easily with <strong>custom-hooks</strong>, with ES6 features that allows you to include only the hooks you want.</p>

## Installation
 > Note: This library is still in development, was not published to npm.

## Usage

We have several examples on the <a href="#">hooks page</a>. Here is the first one to get you started:

```js
import { useRecognition } from 'custom-hooks';

const App = () => {
  const [{ transcript, listening }, recognition] = useRecognition({
    language: 'pt-BR',
  });

  const startSpeech = () => {
    try {
      listening ? recognition.stop() : recognition.start();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <button onClick={startSpeech}>start speech</button>
      {transcript && <span>{transcript}</span>}
    </>
  );
};
```

## Contributing

We'd love to have your helping hand on <strong>custom-hooks</strong>! See <a href="https://github.com/Mario-aj/custom-hooks/blob/main/CONTRIBUTING.md">CONTRIBUTING.md</a> for more information on what we're looking for and how to get started.

## <img class="emoji" height="20" width="20"  src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dc.png" alt="licence-icon"/> License

Custom-hooks is <a href="https://github.com/Mario-aj/custom-hooks/blob/main/LICENSE" target="blank">MIT licensed</a>.

# ✍🏻 Creator

<a href="https://github.com/Mario-aj">Mário Alfredo Jorge</a>

