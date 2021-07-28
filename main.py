def check_vin(number):
    num_dict={'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'J':1,'K':2,'L':3,'M':4,'N':5,'P':7,'R':9,'S':2,'T':3,'U':4,'V':5,'W':6,'X':7,'Y':8,'Z':9 }
    tempArr=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2]
    charList=['I','O','Q']
    i=0
    sum=0
    if(len(number)!=17):
            return False
    else:
        for character in number:
            if(character.islower() or character in charList):
                return False
            elif(character.isdigit()):
                sum+=tempArr[i] * int(character)
            else:
                sum+=tempArr[i] * num_dict[character]
            i+=1
    if(number[8]==str(sum%11) or num_dict[number[8]]==(sum%11)):
        return True
    else:
        return False

print(check_vin("5YJ3E1EAXHF000337"))