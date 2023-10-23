import React, { useState, useRef, useEffect } from 'react';
import "./Dropdown.css";

interface DropdownProps {
    options: string[];
    onChange: (selectedOption: string) => void;
    initialOption?: string;
}


function Dropdown({ options, onChange, initialOption }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(initialOption || options[0]);

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (event: Event) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(option);
    };

    const longestOption = options.reduce((longest, option) => option.length > longest.length ? option : longest, '') + "qwer";

    return (
        <div ref={containerRef} className="dropdown-container">
            <div className="longest-option" aria-hidden="true">{longestOption}</div>
            <button className="dropdown-button" onClick={() => setIsOpen(prev => !prev)}>
                {selectedOption}
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    {options.map(option => (
                        <div key={option} className={selectedOption === option ? "dropdown-item-selected" : "dropdown-item"} onClick={() => handleOptionClick(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;