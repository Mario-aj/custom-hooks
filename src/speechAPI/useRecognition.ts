import { useState } from 'react';

interface IRecognitionProps {
  language: string;
}

interface IResultProps {
  error: string;
  listening: boolean;
  transcript: string;
}

const useRecognition = ({
  language,
}: IRecognitionProps): [IResultProps, SpeechRecognition] => {
  try {
    const [error, setError] = useState('');
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const { webkitSpeechRecognition } = window as any;
    const SpeechRecognition =
      window.SpeechRecognition || webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = language || 'en-US';

    recognition.onstart = () => setListening(true);
    recognition.onend = () => {
      setListening(false);
      setTranscript('');
    };
    recognition.onerror = (event) => {
      setListening(false);
      setError(event.message);
    };
    recognition.onresult = (event) =>
      setTranscript(event.results[0][0].transcript);

    return [{ error, listening, transcript }, recognition];
  } catch (err) {
    throw new Error(err.message);
  }
};

export default useRecognition;
