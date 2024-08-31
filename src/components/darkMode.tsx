import { useState, useEffect } from 'react';







function modeChange(isChecked: boolean) {
    if (isChecked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

export default function DarkMode() {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        modeChange(isChecked);
    }, [isChecked]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='absolute right-8 top-16'>
            <div className="wrap-check-61">
                <input 
                    type="checkbox" 
                    className='checkbox' 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                />
            </div>
        </div>
    );
}
