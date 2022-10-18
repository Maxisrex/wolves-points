export interface AuthState{
    status:'checking'|'autheticated'|'not-autheticated';
    token:string|null;
    errorMesage:string;
    user:any  
 }
 
 type AuthAction =
     |{type:'singUp',payload:{token:string}}
     |{type:'addError', payload:string}
     |{type:'removeError'}
     |{type:'no-authenticated'}
     |{type:'logOut'}
 
     
 export const AuthReducer = (state:AuthState, action:AuthAction):AuthState => {
   switch (action.type) {
     case 'addError':
         return{
             ...state,
             user:null,
             status:'autheticated',
             //token:null,
             errorMesage:action.payload
 
         }
     case 'removeError':
         return{
             ...state,
             errorMesage:''
         }
     case 'singUp':
         return{
           ...state,
           errorMesage:'',
           status:'autheticated',
           token:action.payload.token,
           //user:action.payload.user  
         }
     case 'logOut':
     case 'no-authenticated':
         return{
           ...state,
           status:'not-autheticated',
           //token:null,
           user:null  
         }
   
     default:
         return state;
   } 
 }