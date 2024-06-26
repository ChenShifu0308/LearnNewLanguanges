import { SentenceItem } from "@/types/types";

export const koSentences: SentenceItem[] = [
  {
    id: 1,
    name: "hello",
    language: "ko",
    sentence: "안녕하세요.",
    phonetic: "annyeonghaseyo",
  },
  {
    id: 2,
    name: "thank_you",
    language: "ko",
    sentence: "감사합니다.",
    phonetic: "gamsahamnida",
  },
  {
    id: 3,
    name: "sorry",
    language: "ko",
    sentence: "미안합니다.",
    phonetic: "mianhamnida",
  },
  {
    id: 4,
    name: "how_are_you",
    language: "ko",
    sentence: "어떻게 지내세요?",
    phonetic: "eotteoke jinaeseyo",
  },
  {
    id: 5,
    name: "it_is_ok",
    language: "ko",
    sentence: "괜찮아요.",
    phonetic: "gwaenchanayo",
  },
  {
    id: 6,
    name: "goodbye",
    language: "ko",
    sentence: "안녕히 가세요.",
    phonetic: "annyeonghi gaseyo",
  },
  {
    id: 7,
    name: "yes",
    language: "ko",
    sentence: "네.",
    phonetic: "ne",
  },
  {
    id: 8,
    name: "no",
    language: "ko",
    sentence: "아니요.",
    phonetic: "aniyo",
  },
  {
    id: 9,
    name: "my_name_is",
    language: "ko",
    sentence: "제 이름은 ...입니다.",
    phonetic: "je ireumeun ...imnida",
  },
  {
    id: 10,
    name: "how_much_is_this",
    language: "ko",
    sentence: "이것은 얼마입니까?",
    phonetic: "igeoseun eolmaimnikka",
  },
  {
    id: 11,
    name: "where_is_the_bathroom",
    language: "ko",
    sentence: "화장실 어디에요?",
    phonetic: "hwajangsil eodieyo",
  },
  {
    id: 12,
    name: "i_do_not_understand",
    language: "ko",
    sentence: "이해하지 못합니다.",
    phonetic: "ihaehaji moshapnida",
  },
  {
    id: 13,
    name: "do_you_take_credit_cards",
    language: "ko",
    sentence: "신용 카드를 받으십니까?",
    phonetic: "sinyong kadeureul badeusimnikka",
  },
  {
    id: 14,
    name: "i_need_go_to_hospital",
    language: "ko",
    sentence: "병원에 가야 해요.",
    phonetic: "byeongwone gaya haeyo",
  },
  {
    id: 15,
    name: "is_there_free_wifi_available",
    language: "ko",
    sentence: "무료 와이파이가 있나요?",
    phonetic: "muleo waipai-ga innayo",
  },
  {
    id: 16,
    name: "which_one_do_you_recommend",
    language: "ko",
    sentence: "어느 것을 추천하시겠습니까?",
    phonetic: "eoneu geoseul chucheonhasigessnikka",
  },
  {
    id: 17,
    name: "can_it_be_cheaper",
    language: "ko",
    sentence: "더 싸게 할 수 있나요?",
    phonetic: "deo ssage hal su innayo",
  },
  {
    id: 18,
    name: "could_you_take_a_picture_for_me",
    language: "ko",
    sentence: "제 사진 찍어 주실 수 있나요?",
    phonetic: "je sajin jjigeo jusil su innayo",
  },
  {
    id: 19,
    name: "i_am_allergic_to_peanuts",
    language: "ko",
    sentence: "저는 땅콩 알레르기가 있어요.",
    phonetic: "jeoneun ttangkong allelgiga isseoyo",
  },
  {
    id: 20,
    name: "i_do_not_eat_spicy_food",
    language: "ko",
    sentence: "저는 매운 음식을 먹지 않아요.",
    phonetic: "jeoneun maeun eumsigeul meokji anhayo",
  },
];

/* 
| English       | Chinese     |   Spanish   | French      | German      | Italian     | Japanese    | Korean      | Portuguese  | Russian     | Arabic      |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Hello.        | 你好。        | Hola.        | Bonjour.    | Hallo.      | Ciao.       | こんにちは。 | 안녕하세요. | Olá.        | Здравствуйте. | مرحبا.     |
| Thank you.    | 谢谢。       | Gracias.     | Merci.      | Danke.      | Grazie.     | ありがとう。 | 감사합니다. | Obrigado.   | Спасибо.     | شكرا.      |
| Sorry.        | 对不起。     | Lo siento.   | Désolé.     | Entschuldigung. | Mi dispiace. | ごめんなさい。 | 미안합니다. | Desculpe.  | Извините.   | آسف.      |
| How are you?  | 你好吗？     | ¿Cómo estás? | Comment ça va? | Wie geht's? | Come stai?  | お元気ですか？ | 어떻게 지내세요? | Como você está? | Как дела? | كيف حالك؟ |
| It`s okay.    | 没关系。     | Está bien.   | C'est bon.  | Es ist in Ordnung. | Va bene. | 大丈夫です。 | 괜찮아요. | Está bem.  | Всё в порядке. | حسنا.     |
| Goodbye.      | 再见。       | Adiós.       | Au revoir.  | Auf Wiedersehen. | Arrivederci. | さようなら。 | 안녕히 가세요. | Adeus.    | До свидания. | مع السلامة. |
| Yes.          | 是的。       | Sí.          | Oui.        | Ja.         | Sì.         | はい。       | 네.       | Sim.       | Да.         | نعم.      |
| No.           | 不。         | No.          | Non.        | Nein.       | No.         | いいえ。     | 아니요.   | Não.       | Нет.        | لا.       |
| My name is ...| 我叫...      | Me llamo ... | Je m'appelle ... | Ich heiße ... | Mi chiamo ... | 私の名前は...です。 | 제 이름은 ...입니다. | Meu nome é ... | Меня зовут ... | اسمي ... |
| How much is this? | 这个多少钱？ | ¿Cuánto cuesta esto? | Combien ça coûte? | Wie viel kostet das? | Quanto costa questo? | これはいくらですか？ | 이것은 얼마입니까? | Quanto custa isso? | Сколько это стоит? | كم هذا؟ |
| Where is the bathroom? | 厕所在哪里？ | ¿Dónde está el baño? | Où sont les toilettes? | Wo ist die Toilette? | Dov'è il bagno? | トイレはどこですか？ | 화장실 어디에요? | Onde fica o banheiro? | Где ванная комната? | أين الحمام؟ |
| I don't understand. | 我不明白。 | No entiendo. | Je ne comprends pas. | Ich verstehe nicht. | Non capisco. | 分かりません。 | 이해하지 못합니다. | Eu não entendo. | Я не понимаю. | أنا لا أفهم. |
| Do you take credit cards? | 你们接受信用卡吗？ | ¿Aceptan tarjetas de crédito? | Acceptez-vous les cartes de crédit? | Akzeptieren Sie Kreditkarten? | Accettate carte di credito? | クレジットカードは使えますか？ | 신용 카드를 받으십니까? | Vocês aceitam cartões de crédito? | Вы принимаете кредитные карты? | هل تقبلون بطاقات الائتمان؟ |
| I need go to hospital. | 我需要去医院。 | Necesito ir al hospital. | J'ai besoin d'aller à l'hôpital. | Ich muss ins Krankenhaus. | Devo andare in ospedale. | 病院に行かなければなりません。 | 병원에 가야 해요. | Eu preciso ir ao hospital. | Мне нужно в больницу. | أحتاج الذهاب إلى المستشفى. |
| Is there free wifi available? | 有免费的无线网络吗？ | ¿Hay wifi gratis disponible? | Le wifi gratuit est-il disponible? | Gibt es kostenloses WLAN? | C'è wifi gratuito disponibile? | 無料のWi-Fiはありますか？ | 무료 와이파이가 있나요? | Existe wifi gratuito disponível? | Есть ли бесплатный Wi-Fi? | هل هناك واي فاي مجاني متاح؟ |
| Which one do you recommend? | 你推荐哪一个？ | ¿Cuál recomiendas? | Lequel recommandez-vous? | Welches empfehlen Sie? | Quale mi consigli? | どれをお勧めしますか？ | 어느 것을 추천하시겠습니까? | Qual você recomenda? | Какой вы рекомендуете? | أي واحد توصي به؟ |
| Can it be cheaper? | 可以便宜点吗？ | ¿Puede ser más barato? | Peut-il être moins cher? | Kann es billiger sein? | Può essere più economico? | もっと安くできますか？ | 더 싸게 할 수 있나요? | Pode ser mais barato? | Может быть дешевле? | هل يمكن أن يكون أرخص؟ |
| Could can take a picture for me? | 可以给我拍张照片吗？ | ¿Puedes tomarme una foto? | Pourriez-vous me prendre en photo? | Könnten Sie ein Foto von mir machen? | Potresti farmi una foto? | 写真を撮ってもらえますか？ | 제 사진 찍어 주실 수 있나요? | Você pode tirar uma foto para mim? | Можете сделать мне фотографию? | هل يمكنك التقاط صورة لي؟ |
| I am allergic to peanuts. | 我对花生过敏。 | Soy alérgico a los cacahuetes. | Je suis allergique aux arachides. | Ich bin allergisch gegen Erdnüsse. | Sono allergico alle arachidi. | 私はピーナッツアレルギーです。 | 저는 땅콩 알레르기가 있어요. | Sou alérgico a amendoim. | У меня аллергия на арахис. | أنا أعاني من حساسية تجاه الفول السوداني. |
| I don't eat spicy food. | 我不吃辣的食物。 | No como comida picante. | Je ne mange pas de nourriture épicée. | Ich esse keine scharfe Nahrung. | Non mangio cibo piccante. | 辛い食べ物は食べません。 | 저는 매운 음식을 먹지 않아요. | Eu não como comida apimentada. | Я не ем острое. | أنا لا أكل الطعام الحار. |

*/
