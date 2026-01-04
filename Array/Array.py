# import array as arr

from array import *

val = array("i", [1,2,3,4,5,6,7,8,9])

# for i in  range(0, len(val)):
#     print(val[i], end=" ")

# print('\n')
# for x in val:
#     print(x, end=' , ')

# print('\n')

# print(val.typecode)

# val.reverse()
# for i in range(0, len(val)):
#     print(val[i], end=' ')

val.insert(1, 50)
val.append(100)
val[2] = 200


# for i in range(0, len(val)):
#     print(val[i], end=' ')
# print('\n')

# copyArray = array(val.typecode,(x*2 for x in val))

# copyArray.pop(3)

# copyArray.remove(15)


# for i in range(0, len(copyArray)):
#     print(copyArray[i], end=' ')


abc = val[2: 5]
abc = val[::-1]

# for i in range(0, len(abc)):
#     print(abc[i], end=' ')


# arr = array('i',[])

# n = int(input("Enter a number: "))

# for i in range(0, n):
#     arr.append(int(input('Enter next input: ')))

# for x in arr:
#     print(x, end=' ')

arr = array('i', [12,35,25,63,42,15,36])
i= arr.index(42)

print(i)