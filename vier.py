print("Alles is 4")
getal = input("Voer een getal in dat tussen de 0 en 1000 ligt:\n")
nieuw_getal = 0
def main():
    global getal
    global nieuw_getal
    cijfer = int(getal)
    getal = str(getal)
    oud_getal = getal
    if getal[-1] != 0 and cijfer > 20:
        i = 1
        getal = getal[::-1]
        nieuw_getal = 0
        for current in getal:
            current = int(current) * i
            i *= 10
            if current == 0:
                continue
            if current > 100:
                i /= 10
                i = int(i)
                nieuw_getal = nieuw_getal + alles_is_vier(current/i) + alles_is_vier(i)
                i *= 10
            else:
                nieuw_getal += alles_is_vier(str(current))
        else:
            print(oud_getal + " is " + str(nieuw_getal + 2))
            getal = nieuw_getal + 2
            main()
    else:
        while getal != 4:
            ouder_getal = str(getal)
            alles_is_vier(getal)
            print(ouder_getal + " is " + str(getal))
        else:
            print(str(getal) + " is 4")
            print("alles is 4")

def alles_is_vier(voer):
    global getal
    getal = int(voer)
    if getal == 2 or getal == 3 or getal == 4 or getal == 5 or getal == 8 or getal == 10:
        getal = 4
        return getal
    elif getal == 1 or getal == 6 or getal == 11:
      #  print(str(getal) + " is 3")
        getal = 3
        return getal
    elif getal == 7 or getal == 9:
       # print(str(getal) + " is 5")
        getal = 5
        return getal
    elif getal == 12 or getal == 30 or getal == 60:
        #print(str(getal) + " is 6")
        getal = 6
        return getal
    elif getal == 13 or getal == 16 or getal == 20 or getal == 40 or getal == 50 or getal == 80 or getal == 100:
        #print(str(getal) + " is 7")
        getal = 7
        return getal
    elif getal == 14 or getal == 15 or getal == 18 or getal == 70 or getal == 90:
        #print(str(getal) + " is 8")
        getal = 8
        return getal
    elif getal == 17 or getal == 19:
        #print(str(getal) + " is 9")
        getal = 9
        return getal
try:
    getal = int(getal)
    if getal < 1 or getal > 999:
        print("Buiten bereik")
    else:
        main()
except:
    print("Dit is geen getal")

