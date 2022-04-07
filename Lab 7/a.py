def func(a, b):
    while a != 0 and b != 0:
        if a > b:
            a = a % b
        elif a < b:
            b = b % a
    print(a + b)
    # while max(a,b) % min(a,b) != 0:
    #     if a > b:
    #         a = a % b
    #     elif a < b:
    #         b = b % a
    #     print(min(a,b))

a = int(input())
b = int(input())
print(func(a, b))