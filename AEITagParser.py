class AEITagParser:
    def __init__(self, epcarr):
        for epc in epcarr:
            
            print(self.printcarmark(epc) + " " + str(self.printcarnumber(epc)))
    
    def printcarnumber(self, epc):
        return (int(bin(int(epc, 16))[27:48],2))

    def printcarmark(self, epc):
        self.carMarkInt = int(bin(int(epc, 16))[9:28],2)
        self.n1 = self.carMarkInt/19683
        self.n2 = (self.carMarkInt - self.n1 * 19683) / 729
        self.n3 = (self.carMarkInt - (self.n1 * 19683 + self.n2 * 729)) / 27
        self.n4 = self.carMarkInt - (self.n1 * 19683 + self.n2 * 729 + self.n3 * 27)
        self.c1 = 65 + self.n1
        self.c2 = 32 if (self.n2 == 0) else (65 + self.n2 - 1)
        self.c3 = 32 if (self.n3 == 0) else (65 + self.n3 - 1)
        self.c4 = 32 if (self.n4 == 0) else (65 + self.n4 - 1)
        return (str(chr(self.c1) + chr(self.c2) + chr(self.c3) + chr(self.c4)))