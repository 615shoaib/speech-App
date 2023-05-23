
import {Paper,Button, Stack, Typography} from "@mui/material"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';





const Main=()=>{
   const startListening=()=> SpeechRecognition.startListening({continue:true, language:"en-IN"})
    const {transcript,browserSupportsSpeechRecognition} = useSpeechRecognition();

    if(!browserSupportsSpeechRecognition){
        return  <span>Browser doesn't support speech recognition.</span>;;
    }
    return(
        <>
        <Stack direction="row" flexDirection="column">
         <Stack direction="row"><Typography variant="h4" sx={{fontSize:{
            xs:"20px",
            sm:"28px",
            md:"32px"

         },color:{
            xs:"red",
            sm:"green",
            md:"#46"
         }}}>Welcome to my Sppech Tool App</Typography></Stack>
        <br />
       <Paper elevation={5} sx={{width:{
           xs:300,
           sm:400,
           md:300,
           lg:400,
           xl:500,
        
       },height:"400px"}}>
        <Stack direction="row">
            <Typography>{transcript}</Typography>
        </Stack>
        <Stack direction="row" sx={{display:"flex",justifyContent:"end",alignContent:"center",position:"absolute",top:"450px !important"}}>
           <Button>Copy</Button> 
           <Button onTouchStart={startListening} >Start</Button> 
           <Button>Reset</Button> 
            </Stack>    
        </Paper>
        </Stack>
        </>

    )
}

export default Main;