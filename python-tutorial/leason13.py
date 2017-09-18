from sys import argv
#from os.path import exists

script, from_file, to_file = argv

print("copy from %s to %s"% (from_file, to_file))

in_file = open(from_file)
indata = in_file.read()

print("The input file is %d bytes long"% len(indata))

input()

out_file = open(to_file, 'w')
out_file.write(indata)

out_file.close()

in_file.close()
