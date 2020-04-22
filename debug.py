# Is it the same python interpreter? 
import sys
print(sys.executable)

# Is it the same working directory? 
import os
print(os.getcwd())

# Are there any discrepancies in sys.path? 
# this is the list python searches, sequentially, for import locations
# some environment variables can fcuk with this list
print(sys.path)

import matplotlib
print ('Done!')
