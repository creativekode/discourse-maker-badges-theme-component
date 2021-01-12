const ThemeConfig = {
    development: {
        lambdaUrl: (message)=>{return `https://qqz32mg1oi.execute-api.us-east-1.amazonaws.com/dev/discourse?username=${message.username}&address=${message.address}&signature=${message.signature}`; }
    },
    localhost: {
        lambdaUrl: (message)=>{return `https://maker.ngrok.io/dev/discourse?username=${message.username}&address=${message.address}&signature=${message.signature}`;}
    },
    production: {
        lambdaUrl: (message)=>{return `https://3nsc1491ed.execute-api.us-east-1.amazonaws.com/dev/discourse?username=${message.username}&address=${message.address}&signature=${message.signature}`;}
    }
};

export default {
    name: 'maker-badges-config',
    initialize(){
        globalThis.ThemeConfig = ThemeConfig;
    }
}