declare module Janosh.TypeScriptPersonalIdCheckAndGenerator.App.Business.PersonalId {
    
    export class DanishPersonalIdTester implements PersonalIdTester{
        test(personalId: string) {
            return true;        
        }
    }
}