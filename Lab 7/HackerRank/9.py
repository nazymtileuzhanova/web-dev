from __future__ import division

def average(array):
    # your code goes here
    sum_array = sum(set(array))
    len_array = len(set(array))
    avr = sum_array/len_array
    return avr;

if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())
    result = average(arr)
    print result