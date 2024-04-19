import math

num1 = int(input("first number: "))
num2 = int(input("second number: "))
operator = input("Enter operator +, -, *, / : ")

if(operator == '+'):
     result = num1 + num2
     print("The add of %i and %i is: %i" % (num1, num2, result))

elif(operator == '-'):
     result = num1 - num2
     print("The sub of %i and %i is: %i" % (num1, num2, result))

elif(operator == '*'):
    result = num1 * num2 
    print("The mul of %i and %i is: %i" % (num1, num2, result))

elif(operator == '/'):
     result = num1 / num2
     print("The div of %I and %i is: %i" %(num1 ,num2, result))
    
else:
    print('invalid operator')

print("thanks program terminated :)")