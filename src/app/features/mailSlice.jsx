import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    // id: nanoid(),

    title: "LinkedIn",
    subject: "Apply now: Product Designer",
    description:
      "Art by Microsoft Design Senior Product Designer @ Microsoft — Remote friendly Microsoft is looking for a Senior Product Designer to join their Web Experience Collective (WXC) team and work at the",
    time: "20 Feb",
  },
  {
    // id: nanoid(),

    title: "Quincy Larson",
    subject: "Learn Linux for Beginners",
    description:
      "Here are this week's five links that are worth your time: 1. If you're new to Linux, this freeCodeCamp course is",
    time: "20 Feb",
  },
  {
    // id: nanoid(),

    title: "Dribbble",
    subject: "💼 New jobs + Live design career Q&A",
    description:
      "Get career-ready with Helen Tran Join Dribbble & Helen Tran for a live webinar tomorrow to learn all about our upcoming Design Career-Prep program and the guaranteed job outcomes for designers. Ask your career-related questions, network with other designers around the world, and get advice from Helen Tran in this exclusive online event.",
    time: "22 Feb",
  },
  {
    // id: nanoid(),

    title: "Deniz Deke",
    subject: "Hör auf dich fertig zu machen Rick",
    description:
      "Dieses kurze Gedankenexperiment hilft dir, dein Selbstvertrauen sofort zu steigern: Stelle dir vor, du hast einen kleinen 10-jährigen Bruder. Dein Bruder schreibt in der Schule eine 6 und kommt weinend nach Hause. Er schaut dir traurig in die Augen und sagt „Ich bin so dumm, ich kriege nichts hin!“ Was würdest du deinem Bruder sagen? Wahrscheinlich würdest du ihn motivieren, aufbauen und ihm helfen beim nächsten Mal eine bessere Note zu schreiben. Wie würde dein Leben aussehen, wenn du mit dir selbst genauso umgehst? Wir behandeln uns selbst oft genau umgekehrt. Wenn wir bei etwas scheitern, dann machen wir uns dafür fertig.",
    time: "24 Feb",
  },
  {
    // id: nanoid(),

    title: "Stack Overflow",
    subject: "Apply now: Product Designer",
    description: "The Overflow #166: Writing code for other people",
    time: "25 Feb",
  },
  {
    // id: nanoid(),

    title: "Reverso",
    subject: "Welcome to Reverso",
    description:
      "You registered on Reverso with your Google account. Enjoy Reverso world-class AI translation Our translation services leverage Reverso's 10+ years of experience in Artificial Intelligence, with the latest neural machine translation technologies.",
    time: "27 Feb",
  },
  {
    // id: nanoid(),

    title: "InstaForex Analytics",
    subject: "Daily newsletter of analytics",
    description:
      "Yesterday morning, it was expected that after a jump of 5.6%, the volume of orders for durable goods in the United States would fall by 3.5%, which in itself did not create the best prospects for the dollar. But it turned out to be even worse.",
    time: "28 Feb",
  },
  {
    // id: nanoid(),

    title: "Jim Kwik",
    subject: "Love your brain today by doing this…",
    description:
      "Dear Kwik Brain, Happy Valentine's Day! Today is a great day to be reminded to show extra love and care for the most powerful tool sitting between your ears... your brain :) When your brain is functioning at a high level, the best version of you also shows up for your loved ones (and for yourself, too!).  ",
    time: "1 Mar",
  },
  {
    // id: nanoid(),

    title: "Julia │Lingster",
    subject: "Hilft dir mein Deutschkurs weiter? 💪",
    description:
      "Hallo Khurshid, heute schreibe ich dir eine persönliche Nachricht. Du weißt ja, ich habe jahrelang Deutsch an der Universität Saarbrücken gelehrt und nun auf YouTube, Instagram, Facebook und TikTok. Meine größte Freude ist es, den Erfolg meiner Schüler zu sehen, nachdem sie meine induktiv-deduktiv- oder die Input-Output-Methode benutzt haben! ",
    time: "2 Mar",
  },
  {
    // id: nanoid(),

    title: "Advance ",
    subject: "🔥 Exclusive webinar tomorrow",
    description:
      "Hello, Khurshid! The telegram channel of the Advance closed sales club actively discusses the topics of inequality in training, motivation and ... However, it is better to see once than listen to someone else's retelling a hundred times. Subscribe to the telegram channel and be among those who are the first to receive all useful and up-to-date information, as well as access to the most profitable offers.",
    time: "4 Mar",
  },
];

const mailSlice = createSlice({
  name: "mails",
  initialState,
  reducers: {
    mailAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, subject, description, time) {
        return {
          payload: {
            id: nanoid(),
            title,
            subject,
            description,
            time,
          },
        };
      },
    },
  },
});

export const selectAllMail = (state) => state.mails;

export const { mailAdded } = mailSlice.actions;

export default mailSlice.reducer;
