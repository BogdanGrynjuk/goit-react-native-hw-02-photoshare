import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground, 
  TextInput,
  TouchableOpacity,  
} from "react-native";

export default function LoginScreen() {
  
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  
  return (
    <View style={styles.container}>
      {/* background */}
      <ImageBackground
        source={require("../assets/images/image-bg.jpg")}
        style={styles.imageBackground}
      >
        {/*  */}

        <View style={styles.wrapper}>          
          <View>
            <Text style={styles.formTitle}>Увійти</Text>
          </View>
          {/* form */}
          <View style={styles.form}>           
            {/* input email */}
            <View>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isFocusedEmail ? "#FF6C00" : "#E8E8E8",
                  backgroundColor: isFocusedEmail ? '#FFFFFF' : "#F6F6F6",
                  color: "#212121",
                }}
                placeholder="Адреса електронної пошти"
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => setIsFocusedEmail(false)}
              />
            </View>
            {/* input password */}
            <View style={{ position: "relative" }}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: isFocusedPassword ? "#FF6C00" : "#E8E8E8",
                  backgroundColor: isFocusedPassword ? "#FFFFFF" : "#F6F6F6",
                  color: "#212121",
                }}
                placeholder='Пароль'
                secureTextEntry={!isVisiblePassword}
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
              />
              <TouchableOpacity
                style={styles.btnToggle}
                activeOpacity={0.8}
                onPressIn={() => setIsVisiblePassword(true)}
                onPressOut={() => setIsVisiblePassword(false)}
              >
                <Text style={styles.btnToggleText}>Показати</Text>
              </TouchableOpacity>
            </View>
            {/* btn sign in */}
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}             
            >
              <Text style={styles.btnTitle}>Увійти</Text>
            </TouchableOpacity>
            {/* link */}
            <TouchableOpacity
              style={styles.link}
              activeOpacity={0.8}
            >
              <Text style={styles.linkText}>
                Немає акаунту? Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
        
      </ImageBackground>

    </View>
  
  );
};

const styles = StyleSheet.create({

   container: {
    flex: 1,
    backgroundColor: '#ffffff',   
  },

  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  wrapper: {  
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },

  formTitle: {
    marginTop: 32,
    marginBottom: 33,
    fontSize: 30,
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",
    color: "#212121",  
  },

  form: {
    paddingHorizontal: 16,
  },

  input: {
    padding: 16,
    marginBottom: 16,    
    textAlign: 'left',
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    borderWidth: 1,   
    borderRadius: 8,
  },

   btnToggle: {
    position: "absolute",
    top: 20,
    right: 16,   
  },

  btnToggleText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },

  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 25,
  },

  btnTitle: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    color: '#ffffff',
  },

  link: {
    alignItems: "center",
    marginBottom: 111,
  },

  linkText: {
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 16,
    color: "#1B4371",
  },
});