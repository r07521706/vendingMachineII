import json

def lambda_handler(event, context):
    number = event['queryStringParameters']['number']
    ans = "no"
    if(int(number)%2==0):
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
