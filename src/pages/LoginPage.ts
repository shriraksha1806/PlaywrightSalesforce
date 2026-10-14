import{Page} from "@playwright/test"
import HomePage from "./HomePage"
//import { error } from "console"

export default class LoginPage {
    private readonly usernameInputSelector = "#username"
    private readonly passwordInputSelector = "#password"
    private readonly loginButtonSelector ="#Login"
private readonly dontRegisterPhoneSelector="#register-phone-no"
    constructor(private page:Page){}

    async navigateToLoginPage(){
        await this.page.goto("/")
    }
async fillUsername(username:string){
    await this.page.locator(this.usernameInputSelector).fill(username)
}
async fillPassword(password: string){
    await this.page.locator(this.passwordInputSelector).fill(password)

}
async dontRegisterPhone(){
    await this.page.locator(this.dontRegisterPhoneSelector).click()
}
   async clickLoginButton(){
    await this.page.locator(this.loginButtonSelector).click().catch((error) =>
     {console.error('error clicking login button: ${error}')
})


const homePage= new HomePage(this.page)
return homePage
}
}
