import { useState } from 'react';

interface IRecognitionProps {
  language?: string;
  continuous?: boolean;
}

interface IRecognitionResult {
  listening: boolean;
  transcript: string;
}

const useRecognition = ({
  language,
  continuous,
}: IRecognitionProps): [IRecognitionResult, SpeechRecognition] => {
  try {
    let strcatResults = '';
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const { webkitSpeechRecognition } = window as any;
    const SpeechRecognition =
      window.SpeechRecognition || webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    if (!recognition)
      throw new Error('Your browser does not support speech API');

    recognition.lang = language || 'en-US';
    recognition.continuous = continuous || false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => {
      setListening(false);
    };
    recognition.onerror = (event) => {
      throw new Error(event.message);
    };
    recognition.onresult = (event) => {
      const { resultIndex, results } = event;
      strcatResults += results[resultIndex][0].transcript;
      setTranscript(strcatResults);
    };

    return [{ transcript, listening }, recognition];
  } catch (e) {
    throw new Error(e.message);
  }
};

export default useRecognition;
