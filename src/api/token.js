import AsyncStorage from "@react-native-async-storage/async-storage"
import {TOKEN} from '../utils/config'


export async function setTokenApi(token) {
    try {
        await AsyncStorage.setItem(TOKEN, token)
        return true;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getTokenApi(token) {
    try {
        const token = await AsyncStorage.getItem(TOKEN)
        return token;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function removeTokenApi() {
    try {
        await AsyncStorage.removeItem(TOKEN);
        return true;
    } catch (error) {
        console.log(error);
        return null;
    }
}