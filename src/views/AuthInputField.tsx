import { FC } from 'react';
import { View, Text, TextInput, SafeAreaView, TextInputProps } from 'react-native';

interface Props {
    label?: string;
    placeholder?: string;
    keyboardType?: TextInputProps['keyboardType'];
    autoCapitalize?: TextInputProps['autoCapitalize'];
    secureTextEntry?: boolean;
    onChange?: (text: string) => void;
    value?: string;
}

const AuthInputField: FC<Props> = props => {
    const { label, placeholder, keyboardType, autoCapitalize, secureTextEntry, onChange, value } = props;
    return (
        <View>
            <View>
                <Text>{label}</Text>
            </View>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
                onChangeText={onChange}
                value={value}
            />
        </View>
    );
}

export default AuthInputField;


