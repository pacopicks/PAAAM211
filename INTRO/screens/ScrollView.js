import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

export default function ScrollViewScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.title}>titulo</Text>

        <Text style={styles.item}>Desliza para leer todo</Text>

        <Text style={styles.textRed}>
          Initially titled “Closest Thing To Einstein,” the final track “Saint Pablo” addresses Kanye’s deepest thoughts and insecurities, namely the $53 million dollars of debt he mentioned before the release of The Life Of Pablo, Twitter controversies, and media speculation over his mental health
        </Text>

        <Text style={styles.subTitleRed}>
          The song premiered on February 23, 2016 during Yo Gotti’s The Art of Hustle listening party at L.A.’s 1OAK a week after the release of The Life Of Pablo.
        </Text>

        <Text style={styles.text}>
          My wife said I can't say no to nobody
          And at this rate, we gon' both die broke
          Got friends that ask me for money knowin' I'm in debt
          And like my wife said, I still didn't say no
          People tryna say I'm goin' crazy on Twitter
          My friends' best advice was to stay low
          I guess it's hard to decipher all of the bills
          Especially when you got family members on payroll
          The media said it was outlandish spendin'
          The media said he's way out of control
          I just feel like I'm the only one not pretendin'
          I'm not out of control, I'm just not in their control
          I know I'm the most influential
        </Text>

        <Text style ={styles.text}>That TIME cover was just confirmation
        This generation's closest thing to Einstein
        So don't worry about me, I'm fine
        I can see a thousand years from now in real life
        Skate on the paradigm and shift it when I feel like
        Troll conventional thought, don't need to question
        I know it's antiquated so sometimes I get aggressive
        Thank God for Jay Electra, he down with the mission
        Did it with no permission, on our own conditions
        Most blacks with money have been beaten to submission
        Yeezy with the big house, did it way different
        Never listen to Hollywood producers
        Don't stare at money too long, it's Medusa
        The ultimate Gemini has survived
        I wasn't supposed to make it past 25
        </Text>
        <Text style={styles.text}>Yeah you're looking at the church in the night sky
          wondering where's god gonna say hi 
          Oh, you're looking at the church in the night sky wondering where God gonna say hi
        </Text>
        <Text style={styles.text}>I've been wakin' the spirits of millions more to come
        A million illegally downloaded my truth over the drums
        I believe in the children, listen to the kids, bro
        If the phone ringin', go and get your kids, ho
        Brother Don Muhammad told the minister about the presentation
        He sat back and smiled
        </Text>
        <Text Style={styles.text}>
          Black on black lies is worse than black on black crime
        The Jews share their truth on how to make a dime
        Most black men couldn't balance a checkbook
        But buy a new car, talkin' 'bout, "How my neck look?"
        Well, it all looks great
        Four hundred years later, we buyin' our own chains
        The light is before us brothers, so the devil workin' hard
        Real family stick together and see through the mirage
        The smokescreens, perceptions of false reality
        Who the real owner if your boss gets a salary?
        </Text>
        <Text style={styles.text}>
          Nightlife, walk all over me
          Walk all over me
          I'm deliverin' everything I've ever sent that you'll bring
          Fly, fly, fly overseas
          Fly overseas
          Oh, anywhere, everything but in between
          Oh, yeah
          Yeah, you're lookin' at the church in the night sky
          Wonderin' whether God's gonna say hi
          Oh, you're lookin' at the church in the night sky
          And you wonder where is God in your nightlife
          Yeah, you're lookin' at the church in the night sky
          Wonderin' whether God's gonna say hi
          (Father, Father, Father in the night sky)
          Oh, you're lookin' at the church in the night sky
          And you wonder where is God in your nightlife
          (Father, Father, Father in the night sky)
        </Text>
        <Text style={styles.text}>
        Please face me when I speak
         Please say to me somethin' before you leave
         You've been treatin' me like I'm invisible, now I'm visible to you
         Oh, the invisible truth stay sober
         I can't quite understand the games you play
         Understand, understand, understand I'm standin' under oath
         And I promised I, I wouldn't fall anymore
         But I'm cryin' at the bar
         I'm wishin' that you saw my scars, man
         I'm wishin' that you came down here and stood by me
         And looked at me like you knew me
         But I feel so alone
         Like I don't know anyone except the night sky above
         </Text>
         <Text style={styles.text}>
         Saint Pablo has changed my whole life,it's a diferent form to see my life and understand the world
         probably my favorite song ever 
         </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'red',
    color: '#FFF',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  subTitleRed: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 14,
    color: 'black',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 16,
    padding: 10,
  },
  textRed: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 23,
    textAlign: 'justify',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    width: '95%',
    alignSelf: 'center',
  },
});
