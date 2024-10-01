import { useEffect, useRef, useState } from 'react';
import { FiSend } from "react-icons/fi";

export default function HeroConsole() {

  // const [inputLine, setInputLine] = useState('');
  const sampleLines = [
    'const textBoxRef = ',
    '  useRef<null | HTMLDivElement>(null)',
    'useEffect(() => {',
    '  textBoxRef.current!.scrollTop = ',
    '  textBoxRef.current!.scrollHeight;',
    '}, [lines])',
    '',
    'function addLines() {',
    '  setLines([...lines, inputLine]);',
    '  setInputLine(\'\');',
    '}',
    '<strong>hi</strong>'
  ]
  let currentLineFromPreset = 0;
  const [lines, setLines] = useState<string[]>([]);
  const linesRef = useRef<string[]>([]);
  const textBoxRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  const animateConsole = () => {
    // Something else is selected, continue the animation
    if (document.activeElement !== inputRef.current) {
      if (inputRef.current!.value.length < sampleLines[currentLineFromPreset].length) {
        inputRef.current!.value = inputRef.current!.value.concat(sampleLines[currentLineFromPreset][inputRef.current!.value.length]);
      } else {
        // Line completed, go to next line
        // addLines();
        setLines([...linesRef.current, inputRef.current!.value]);
        currentLineFromPreset = (currentLineFromPreset + 1) % sampleLines.length;
      }

      // Wait time for next letter
      const waitTime = Math.random() * (350 - 100) + 100;
      setTimeout(() => animateConsole(), waitTime);
    }
  };

  useEffect(() => {
    setTimeout(() => { animateConsole() }, 50);
  }, []);


  useEffect(() => {
    // if (lines.length > 12)
    //   textBoxRef.current!.scrollTop = textBoxRef.current!.scrollHeight;
    inputRef.current!.value = '';
    linesRef.current = lines;
  }, [lines])

  function addLines() {
    // setLines([...lines, inputLine]);
    // setInputLine('');
    console.log(lines)
    console.log(inputRef.current!.value);
    setLines([...lines, inputRef.current!.value]);
  }

  return (
    <div className='flex flex-col h-[24.5rem] w-[30rem] border-2 border-black rounded-2xl justify-between'>
      <div className='p-2 overflow-hidden scroll-smooth' ref={textBoxRef}>
        {lines.map(line => (<p className='text-2xl'>{line}</p>))}
      </div>
      <div className='flex border-t-2 border-black p-2'>
        <input
          className='text-2xl w-full border-r-2 border-black'
          type="text"
          ref={inputRef}
        // value={inputLine}
        // onChange={(e) => { console.log(e.target.value); setInputLine(e.target.value) }}
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