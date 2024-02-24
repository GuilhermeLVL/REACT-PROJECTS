import { Input } from "@chakra-ui/react";

interface PrimaryInputProps {
    name:string,
    value: string,
    onChange():void

}

Controle
export default function PrimaryInput({name,value,onChange}: PrimaryInputProps){
    return(
        <Input variant='filled' name={name} value={value} onChange={onChange} placeholder='Filled' />
    )
}