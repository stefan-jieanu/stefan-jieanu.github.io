import { useEffect, useRef, useState } from 'react';
import { FiSend } from "react-icons/fi";

export default function HeroConsole() {

  const [inputLine, setInputLine] = useState('');
  const sampleLines = [
    'const textBoxRef = ',
    'useRef<null | HTMLDivElement>(null)',
    'useEffect(() => {',
    'textBoxRef.current!.scrollTop = ',
    'textBoxRef.current!.scrollHeight;',
    '}, [lines])',
    '',
    'function addLines() {',
    'setLines([...lines, inputLine]);',
    'setInputLine(\'\');',
    '}',
    '<strong>hi</strong>'
  ]
  let currentLineFromPreset = 0;
  const [lines, setLines] = useState<string[]>([]);
  const linesRef = useRef<string[]>([]);
  const inputLineRef = useRef<string>();
  const textBoxRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const animateConsole = () => {
    // Something else is selected, continue the animation
    if (document.activeElement !== inputRef.current) {
      if (inputLineRef.current!.length < sampleLines[currentLineFromPreset].length) {
        setInputLine(inputLineRef.current!.concat(sampleLines[currentLineFromPreset][inputLineRef.current!.length]));
      } else {
        // Line completed, go to next line
        setLines([...linesRef.current, inputLineRef.current!]);
        currentLineFromPreset = (currentLineFromPreset + 1) % sampleLines.length;
      }

      // Wait time for next letter
      const waitTime = Math.random() * (350 - 100) + 100;
      setTimeout(() => animateConsole(), waitTime);
    }
  };

  useEffect(() => {
    // setTimeout(() => { animateConsole() }, 50);
  }, []);


  useEffect(() => {
    if (lines.length >= 12)
      textBoxRef.current!.scrollTop = textBoxRef.current!.scrollHeight;
    setInputLine('');
    linesRef.current = lines;
  }, [lines])

  useEffect(() => {
    inputLineRef.current = inputLine;
  }, [inputLine])

  function addLines() {
    // setLines([...lines, inputLine]);
    // setInputLine('');
    setLines([...lines, inputLine]);
  }

  return (
    <div className='flex flex-col h-[24.5rem] w-[30rem] border-2 border-gray-900 shadow-xl rounded-2xl justify-between bg-gray-800'>
      <div className='p-2 overflow-hidden scroll-smooth' ref={textBoxRef}>
        {lines.map(line => (<p className='text-2xl'>{line}</p>))}
      </div>
      <div className='relative flex border-t-2 border-black p-2'>
        <input
          className='text-2xl w-full border-r-2 border-black outline-none caret-transparent bg-gray-800'
          type="text"
          ref={inputRef}
          value={inputLine}
          onChange={(e) => { console.log(e.target.value); setInputLine(e.target.value) }}
        />
        <button
          className='p-2 overflow-hidden'
          onClick={() => addLines()}
        >
          <FiSend className='text-2xl hover:scale-110 transition-all' />
        </button>
      </div>
    </div>
  );
}