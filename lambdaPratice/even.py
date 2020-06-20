import json

def lambda_handler(event, context):
    number = event['queryStringParameters']['number']
    ans = "no"

    if(type(number)==str):
        ans = "str~~"
        ## body
        ansResp = {}
        ansResp['result'] = ans
        # ## resp body
        respObj = {}
        respObj['statusCode'] = 500
        respObj['headers']={}
        respObj['headers']['Content-Type'] = 'application/json'
        respObj['body']=json.dumps(ansResp)
        # TODO implement
    
    elif(int(number)%2==0):
        ans = "yes"
        ## body
        ansResp = {}
        ansResp['result'] = ans
        # ## resp body
        respObj = {}
        respObj['statusCode'] = 200
        respObj['headers']={}
        respObj['headers']['Content-Type'] = 'application/json'
        respObj['body']=json.dumps(ansResp)
        # TODO implement
    
    
    return respObj
