import { SafeAreaView, StyleSheet, Text, View, StatusBar, TextInput, Pressable, Modal, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Sign({ navigation }) {
  const [modalAktif, setModalAktif] = useState(false)
  const [modalAktif1, setModalAktif1] = useState(false)
  const [deger, setDeger] = useState(false)
  return (<>
    <SafeAreaView style={styles.view}>
      <View>
        <TextInput placeholder='Ad' style={styles.textInput} />
        <TextInput placeholder='Soyad' style={styles.textInput} />
        <TextInput placeholder='Kullanıcı Adı' style={styles.textInput} />
        <TextInput placeholder="E-Posta Adresi" style={styles.textInput} keyboardType="email-address" />
        <TextInput placeholder="Şifre" style={styles.textInput} />
        <TextInput placeholder="Şifre (Yeniden)" style={styles.textInput} />

        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={deger}
            onValueChange={(newValue) => setDeger(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.text}> Bu işlemin gerçekleşmesi ile birlikte {`\n`}

            <Text style={styles.textColor} onPress={() => setModalAktif(true)}> Gizlilik İlkesini </Text>
            ve

            <Text style={styles.textColor} onPress={() => setModalAktif1(true)}> Hizmet Koşullarını</Text>

            {`\n`} Kabul Ediyorum.</Text>


        </View>

        <Pressable style={styles.ButtonView} onPress={() => navigation.navigate("Anasayfa")}>
          <Text style={styles.ButtonText}>Kayıt Ol</Text>
        </Pressable>

      </View>
    </SafeAreaView>

    <Modal style={{ height: 100 }} visible={modalAktif}
      onRequestClose={() => setModalAktif(false)}
      animationType='slide'
      presentationStyle='overFullScreen'
      transparent={true}>
      <View style={styles.modalView}>
      <MaterialCommunityIcons name='arrow-collapse' onPress={() => setModalAktif(false)} title="Kapat" color="black" borderRadius={0} size={30} borderWidth={0}
            width="10%" alignSelf="center"
          />        
        <ScrollView>

          <Text style={{ width: "95%", alignSelf: "center" }}>
            <Text style={{ fontWeight: "bold" }}>SpaceSocialNetwork Gizlilik Politikası{'\n'}{'\n'}</Text>

            <Text style={{ fontWeight: "bold" }}>Son Güncelleme:</Text> 5 Şubat 2024{'\n'}{'\n'}

            SpaceSocialNetwork ("Uygulama"), kullanıcıların gönderiler ve etkinlikler içerikleri paylaşabileceği bir platformdur. Uygulama, Google Firebase ile çalışır ve kullanıcıların isim, soyisim, kullanıcı adı, eposta ve şifre bilgileri, gönderileri ve etkinlikleri Google Firebase üzerinde tutulur.
            {'\n'}
            Bu Gizlilik Politikası, Uygulamayı kullandığınızda topladığımız kişisel bilgilerinizin nasıl kullanılacağını ve korunacağını açıklar.
            {'\n'}{'\n'}
            <Text style={{ fontWeight: "bold" }}>Topladığımız Bilgiler:</Text>{'\n'}

            <Text style={{ fontWeight: "bold" }}>Hesap Bilgileri:</Text> Kayıt sırasında isim, soyisim, kullanıcı adı, eposta ve şifre bilgilerinizi toplarız.{'\n'}
            <Text style={{ fontWeight: "bold" }}>İçerik Bilgileri:</Text> Uygulamada paylaştığınız gönderiler ve etkinlikler ile ilgili bilgileri toplarız.{'\n'}
            <Text style={{ fontWeight: "bold" }}>Cihaz Bilgileri:</Text> Kullandığınız cihazın türü, işletim sistemi sürümü ve IP adresi gibi bilgileri toplarız.{'\n'}
            <Text style={{ fontWeight: "bold" }}>Çerezler ve İzleme Teknolojileri:</Text> Uygulamada çerezler ve diğer izleme teknolojileri kullanarak kullanımınızı analiz eder ve deneyiminizi optimize ederiz.{'\n'}
            {'\n'}
            <Text style={{ fontWeight: "bold" }}>Bilgilerinizin Kullanımı:</Text>{'\n'}

            Topladığımız bilgileri aşağıdaki amaçlar için kullanırız:{'\n'}

            * Hesabınızı oluşturmak ve yönetmek{'\n'}
            * Uygulamayı size sunmak ve çalıştırmak{'\n'}
            * Gönderilerinizi ve etkinliklerinizi diğer kullanıcılara göstermek{'\n'}
            * Kişiselleştirilmiş bir deneyim sunmak{'\n'}
            * Uygulamayı geliştirmek ve iyileştirmek{'\n'}
            * Yasal gerekliliklere uymak{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>Bilgilerinizin Paylaşımı:</Text>{'\n'}

            Kişisel bilgilerinizi üçüncü taraflarla aşağıdaki durumlarda paylaşırız:{'\n'}

            <Text style={{ fontWeight: "bold" }}>Yasal Zorunluluk:</Text> Yasal bir gereklilik veya mahkeme kararı ile bilgileri paylaşmak zorundaysak.{'\n'}
            <Text style={{ fontWeight: "bold" }}>Hizmet Sağlayıcılar:</Text> Uygulamayı çalıştırmak için kullandığımız üçüncü taraf hizmet sağlayıcılarla bilgileri paylaşırız.{'\n'}
            <Text style={{ fontWeight: "bold" }}>Reklamcılık:</Text> Kişiselleştirilmiş reklamlar sunmak için reklam ağları ile bilgileri paylaşırız.{'\n'}
            {'\n'}
            <Text style={{ fontWeight: "bold" }}>Bilgilerinizin Güvenliği:</Text>{'\n'}

            Kişisel bilgilerinizin güvenliğini korumak için teknik ve idari tedbirler alıyoruz. Bu tedbirler arasında veri şifreleme, erişim kontrolü ve güvenlik duvarları yer alır.
            {'\n'}{'\n'}
            <Text style={{ fontWeight: "bold" }}>Haklarınız:</Text>{'\n'}

            Kişisel bilgilerinizle ilgili aşağıdaki haklara sahipsiniz:{'\n'}

            <Text style={{ fontWeight: "bold" }}>Erişim: </Text>Kişisel bilgilerinizin bir kopyasını talep etme hakkınız vardır.{'\n'}
            <Text style={{ fontWeight: "bold" }}>Düzeltme:</Text> Hatalı veya eksik kişisel bilgilerinizin düzeltilmesini talep etme hakkınız vardır.{'\n'}
            <Text style={{ fontWeight: "bold" }}>Silme:</Text> Kişisel bilgilerinizin silinmesini talep etme hakkınız vardır.{'\n'}
            <Text style={{ fontWeight: "bold" }}>İşlemeyi Kısıtlama:</Text> Kişisel bilgilerinizin işlenmesini kısıtlama hakkınız vardır.{'\n'}
            <Text style={{ fontWeight: "bold" }}>Taşınabilirlik:</Text> Kişisel bilgilerinizi başka bir veri sorumlusuna taşıma hakkınız vardır.{'\n'}
            <Text style={{ fontWeight: "bold" }}>İtiraz:</Text> Kişisel bilgilerinizin işlenmesine itiraz etme hakkınız vardır.{'\n'}

            {'\n'}
            <Text style={{ fontWeight: "bold" }}>Bu Haklarınızı Kullanmak:</Text>{'\n'}

            Yukarıdaki haklarınızı kullanmak için 16008121013@ogr.bozok.edu.tr adresinden bize ulaşabilirsiniz.{'\n'}

            <Text style={{ fontWeight: "bold" }}>Çocuklar:</Text>{'\n'}

            Uygulama 13 yaşından küçük çocuklar için tasarlanmamıştır. 13 yaşından küçük çocuklardan bilerek kişisel bilgi toplamayız.{'\n'}

            <Text style={{ fontWeight: "bold" }}>Değişiklikler:</Text>{'\n'}

            Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Güncellemeleri bu sayfada yayınlayacağız.{'\n'}

            <Text style={{ fontWeight: "bold" }}>Sorularınız:</Text>{'\n'}

            Bu Gizlilik Politikası hakkında sorularınız varsa 16008121013@ogr.bozok.edu.tr adresinden bize ulaşabilirsiniz.
            {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
          </Text>
        </ScrollView>
      </View>
    </Modal>


    <Modal style={{ height: 100 }} visible={modalAktif1}
      onRequestClose={() => setModalAktif1(false)}
      animationType='slide'
      presentationStyle='overFullScreen'
      transparent={true}>
      <View style={styles.modalView}>
        <MaterialCommunityIcons name='arrow-collapse' onPress={() => setModalAktif1(false)} title="Kapat" color="black" borderRadius={0} size={30} borderWidth={0}
          width="10%" alignSelf="center"
        />
        <ScrollView>

          <Text style={{ width: "95%", alignSelf: "center" }}>
            <Text style={{ fontWeight: "bold" }}>SpaceSocialNetwork Hizmet Koşulları</Text>{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>Son Güncelleme:</Text> 5 Şubat 2024{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>Uygulama:</Text> SpaceSocialNetwork ("Uygulama"){'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>Kullanıcı:</Text> Uygulamayı kullanan kişi{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>Hizmet:</Text> Uygulama tarafından sunulan tüm özellikler ve işlevler{'\n'}{'\n'}

            Bu Hizmet Koşulları ("Koşullar"), Uygulamayı kullanmanız için sizinle aramızdaki sözleşmeyi oluşturur. Uygulamayı kullanmadan önce lütfen bu Koşulları dikkatlice okuyun.
            {'\n'}{'\n'}
            Uygulamayı kullanarak bu Koşulları kabul etmiş olursunuz.
            {'\n'}{'\n'}
            <Text style={{ fontWeight: "bold" }}>1. Hesap Oluşturma:</Text>{'\n'}

            * Uygulamayı kullanmak için bir hesap oluşturmanız gerekir.{'\n'}
            * Hesap oluştururken doğru ve eksiksiz bilgiler vermeniz gerekir.{'\n'}
            * Hesabınızın güvenliğini korumak için şifrenizi kimseyle paylaşmamanız gerekir.{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>2. İçerik:</Text>{'\n'}

            * Uygulamada paylaştığınız tüm içeriklerden siz sorumlusunuz.{'\n'}
            * Yasa dışı, zararlı veya uygunsuz içerik paylaşmamanız gerekir.{'\n'}
            * Telif hakkı veya başka fikri mülkiyet haklarını ihlal eden içerik paylaşmamanız gerekir.{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>3. Kullanım:</Text>{'\n'}

            * Uygulamayı yasal ve etik bir şekilde kullanmanız gerekir.{'\n'}
            * Uygulamayı diğer kullanıcılara zarar vermek veya rahatsız etmek için kullanmamanız gerekir.{'\n'}
            * Uygulamanın işleyişine müdahale etmemeniz gerekir.{'\n'}

            <Text style={{ fontWeight: "bold" }}>4. Ücretlendirme:</Text>{'\n'}

            * Uygulamayı kullanmak şu anda ücretsizdir.{'\n'}
            * Gelecekte ücretli özellikler sunulma ihtimali vardır.{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>5. Fikri Mülkiyet:</Text>{'\n'}

            * Uygulama ile ilgili tüm fikri mülkiyet hakları bize aittir.{'\n'}
            * Uygulamayı kullanarak herhangi bir fikri mülkiyet hakkı kazanmazsınız.{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>6. Sorumluluk Reddi:</Text>{'\n'}

            * Uygulamayı "olduğu gibi" ve "mevcut olduğu şekilde" kabul edersiniz.{'\n'}
            * Uygulamanın hatasız veya kesintisiz çalışacağını garanti etmiyoruz.{'\n'}
            * Uygulamanın kullanımıyla ilgili herhangi bir doğrudan veya dolaylı zarardan sorumlu değiliz.{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>7. Fesih:</Text>{'\n'}

            * Bu Koşulları ihlal etmeniz halinde hesabınızı feshedebiliriz.{'\n'}
            * Hesabınız feshedildiğinde, Uygulamaya ve içeriğinize erişiminizi kaybedersiniz.{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>8. Uyuşmazlık Çözümü:</Text>{'\n'}

            * Bu Koşullardan kaynaklanan herhangi bir uyuşmazlık Türkiye Cumhuriyeti yasalarına göre çözümlenecektir.{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>9. Değişiklikler:</Text>{'\n'}

            * Bu Koşulları zaman zaman güncelleyebiliriz.{'\n'}
            * Güncellemeleri bu sayfada yayınlayacağız.{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>10. İletişim:</Text>{'\n'}

            * Bu Koşullar hakkında sorularınız varsa [e-posta adresi] adresinden bize ulaşabilirsiniz.{'\n'}{'\n'}

            <Text style={{ fontWeight: "bold" }}>11. Yürürlük:</Text>{'\n'}

            * Bu Koşullar, Uygulamayı kullanmaya başladığınız tarihte yürürlüğe girer.

            {'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}
          </Text>
        </ScrollView>
      </View>
    </Modal>
  </>
  )
}

const styles = StyleSheet.create({
  view: {
    alignContent: "center",
    paddingTop: StatusBar.currentHeight,
    height: "100%",
    width: "auto",
    justifyContent: "center",
    borderWidth: 0,
  },
  textInput: {
    borderRadius: 10,
    borderColor: "#6562E5",
    borderWidth: 1,
    backgroundColor: "#ffff",
    margin: 5,
    alignSelf: "center",
    width: "80%",
    color: "#6562E5",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center"
  },
  checkboxContainer: {
    alignSelf: 'center',
    flexDirection: "row",
    width: "auto",
    borderWidth: 0,
  },
  checkbox: {
    alignSelf: "center",
    alignContent: "center",
  },
  text: {
    margin: 8,
  },
  textColor: {
    color: '#6562E5',
  },
  ButtonView: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6562E5',
    marginTop: 20,
    width: "50%",
    alignSelf: "center"
  },
  ButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  modalView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    //alignContent: "center",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#6562E5",
    backgroundColor: "#eeeee4",
    marginTop: "50%",
  },
})