import React, { useState, useEffect, useCallback } from 'react';
import TextContainer from '../TextContainer';
import Button from '../Button';
import Input from '../Input/Input';

const PARAGRAPHS_COUNT = 1;

const TypeRacer = () => {
    const [ isStarted, setIsStarted ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const [ data, setData ] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const getNewText = useCallback(async() => {
        if (isLoading || isStarted) return;
        
        setIsStarted(true);
        setIsSubmitted(false);
        setIsLoading(true);
        setData(null);
        
        const jsonData = await fetch(`https://litipsum.com/api/${PARAGRAPHS_COUNT}/json`);
        const data = await jsonData.json();
        
        const { title, text : [paragraph] } = data;
        setIsLoading(false);
        setData({
            title,
            text: paragraph,
        });
    }, [isStarted, isLoading]);
    
    return (
        <div>
            {data === null ? (
                <Button
                    label="Start game"
                    onClick={getNewText}
                />
            ) : (
                <>
                    <TextContainer title={data.title} text={data.text} />
                    <Input name="text" placeHolder="Type" />
                </>
            )}
        </div>
    );
};

export default TypeRacer;
