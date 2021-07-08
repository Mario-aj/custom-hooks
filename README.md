# <p align="center">custom-hooks</p>

### <p align="center">The library that makes the most popular or complex functions into simple hooks for daily use<p>

<br />
<p>Include popular hooks in your React projects easily with <strong>custom-hooks</strong>, with ES6 features that allows you to include only the hooks you want.</p>

## Installation

```js
  yarn add custom-hooks
     #or
  npm install custom-hooks
```

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

We'd love to have your helping hand on <strong>custom-hooks</strong>! See <a href="#">CONTRIBUTING.md</a> for more information on what we're looking for and how to get started.

## <img class="emoji" height="20" width="20"  src="https://github.githubassets.com/images/icons/emoji/unicode/1f4dc.png" alt="licence-icon"/> Licence

Custom-hooks is <a href="https://github.com/Mario-aj/custom-hooks/blob/main/LICENSE" target="blank">MIT licensed</a>.

# ✍🏻 Creator

<a href="https://github.com/Mario-aj">Mário Alfredo Jorge</a>

<img style="border-radius: 50%;" width="250"  src="https://scontent.flad1-1.fna.fbcdn.net/v/t1.6435-9/75317270_2503820626568282_6938401915864612864_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_eui2=AeHecLKkCRKB729uaoMVZW36L4QCk4hL-OkvhAKTiEv46Tng9SEDr3hWCbUXMt99svwRLZE-A8hn3WM_p35zBFPd&_nc_ohc=lDdwoB7zr-4AX8qWwxD&_nc_ht=scontent.flad1-1.fna&oh=573f8af87f586c6586a2288b7af2f867&oe=60EBC0A5" alt="creator-picture"/>
