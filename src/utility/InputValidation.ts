// an input restriction for form inputs where the user types the goal and spent amount
export function restrictNumberInput(event: any) {
    const input = event.target;
    let value = input.value;
    
    // remove non-numbers and allow up to two decimal points
    value = value.replace(/[^\d.]/g, '');  
    value = value.replace(/^(\d*(?:\.\d{0,2})?).*/, '$1'); 
    
    input.value = value;
}

