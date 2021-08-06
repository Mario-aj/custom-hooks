import { useState } from 'react';

interface IRecognitionProps {
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
}

interface IRecognitionResult {
  listening: boolean;
  transcript: string;
  recognition: SpeechRecognition;
}

export const useRecognition = ({
  language,
  continuous,
  interimResults,
}: IRecognitionProps): IRecognitionResult => {
  try {
    const [listening, setListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const { webkitSpeechRecognition } = window as any;
    const SpeechRecognition =
      window.SpeechRecognition || webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    if (!recognition)
      throw new Error('Your browser does not support speech API');

    recognition.lang = language || navigator.language || 'en-US';
    recognition.continuous = continuous || false;
    recognition.interimResults = interimResults || true;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => {
      setListening(false);
    };
    recognition.onerror = (event) => {
      throw new Error(event.error);
    };
    recognition.onresult = (event) => {
      const { results } = event;

      const strcatResults = Array.from(results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');

      setTranscript(strcatResults);
    };

    return { transcript, listening, recognition };
  } catch (e) {
    return e;
  }
};
