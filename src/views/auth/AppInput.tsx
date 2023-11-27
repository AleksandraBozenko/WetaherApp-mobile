import { FC } from 'react';
import { TextInputProps, TextInput } from 'react-native';

interface Props extends TextInputProps { }

const AppInput: FC<Props> = props => {
    return (
        <TextInput
            {...props}
            onChange={text => {
                console.log(text);
            }}
        />
    )
}