﻿module Told.GreekBible.Data.Tests {

    export class Sample {

        static sampleText2 = ""
        + "200101 N- ----NSM- Ἰάκωβος Ἰάκωβος Ἰάκωβος Ἰάκωβος \r\n"
        + "200101 N- ----GSM- θεοῦ θεοῦ θεοῦ θεός \r\n"
        + "200101 C- -------- καὶ καὶ καί καί \r\n"
        + "200101 N- ----GSM- κυρίου κυρίου κυρίου κύριος \r\n"
        + "200101 N- ----GSM- Ἰησοῦ Ἰησοῦ Ἰησοῦ Ἰησοῦς \r\n";

        static sampleText = ""
        + "200101 N- ----NSM- Ἰάκωβος Ἰάκωβος Ἰάκωβος Ἰάκωβος \r\n"
        + "200101 N- ----GSM- θεοῦ θεοῦ θεοῦ θεός \r\n"
        + "200101 C- -------- καὶ καὶ καί καί \r\n"
        + "200101 N- ----GSM- κυρίου κυρίου κυρίου κύριος \r\n"
        + "200101 N- ----GSM- Ἰησοῦ Ἰησοῦ Ἰησοῦ Ἰησοῦς \r\n"
        + "200101 N- ----GSM- Χριστοῦ Χριστοῦ Χριστοῦ Χριστός \r\n"
        + "200101 N- ----NSM- δοῦλος δοῦλος δοῦλος δοῦλος \r\n"
        + "200101 RA ----DPF- ταῖς ταῖς ταῖς ὁ \r\n"
        + "200101 A- ----DPF- δώδεκα δώδεκα δώδεκα δώδεκα \r\n"
        + "200101 N- ----DPF- φυλαῖς φυλαῖς φυλαῖς φυλή \r\n"
        + "200101 RA ----DPF- ταῖς ταῖς ταῖς ὁ \r\n"
        + "200101 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200101 RA ----DSF- τῇ τῇ τῇ ὁ \r\n"
        + "200101 N- ----DSF- διασπορᾷ διασπορᾷ διασπορᾷ διασπορά \r\n"
        + "200101 V- -PAN---- χαίρειν. χαίρειν χαίρειν χαίρω \r\n"
        + "200102 A- ----ASF- Πᾶσαν Πᾶσαν πᾶσαν πᾶς \r\n"
        + "200102 N- ----ASF- χαρὰν χαρὰν χαράν χαρά \r\n"
        + "200102 V- 2AMD-P-- ἡγήσασθε, ἡγήσασθε ἡγήσασθε ἡγέομαι \r\n"
        + "200102 N- ----VPM- ἀδελφοί ἀδελφοί ἀδελφοί ἀδελφός \r\n"
        + "200102 RP ----GS-- μου, μου μου ἐγώ \r\n"
        + "200102 C- -------- ὅταν ὅταν ὅταν ὅταν \r\n"
        + "200102 N- ----DPM- πειρασμοῖς πειρασμοῖς πειρασμοῖς πειρασμός \r\n"
        + "200102 V- 2AAS-P-- περιπέσητε περιπέσητε περιπέσητε περιπίπτω \r\n"
        + "200102 A- ----DPM- ποικίλοις, ποικίλοις ποικίλοις ποικίλος \r\n"
        + "200103 V- -PAPNPM- γινώσκοντες γινώσκοντες γινώσκοντες γινώσκω \r\n"
        + "200103 C- -------- ὅτι ὅτι ὅτι ὅτι \r\n"
        + "200103 RA ----NSN- τὸ τὸ τό ὁ \r\n"
        + "200103 N- ----NSN- δοκίμιον δοκίμιον δοκίμιον δοκίμιον \r\n"
        + "200103 RP ----GP-- ὑμῶν ὑμῶν ὑμῶν σύ \r\n"
        + "200103 RA ----GSF- τῆς τῆς τῆς ὁ \r\n"
        + "200103 N- ----GSF- πίστεως πίστεως πίστεως πίστις \r\n"
        + "200103 V- 3PMI-S-- κατεργάζεται κατεργάζεται κατεργάζεται κατεργάζομαι \r\n"
        + "200103 N- ----ASF- ὑπομονήν· ὑπομονήν ὑπομονήν ὑπομονή \r\n"
        + "200104 RA ----NSF- ἡ ἡ ἡ ὁ \r\n"
        + "200104 C- -------- δὲ δὲ δέ δέ \r\n"
        + "200104 N- ----NSF- ὑπομονὴ ὑπομονὴ ὑπομονή ὑπομονή \r\n"
        + "200104 N- ----ASN- ἔργον ἔργον ἔργον ἔργον \r\n"
        + "200104 A- ----ASN- τέλειον τέλειον τέλειον τέλειος \r\n"
        + "200104 V- 3PAD-S-- ἐχέτω, ἐχέτω ἐχέτω ἔχω \r\n"
        + "200104 C- -------- ἵνα ἵνα ἵνα ἵνα \r\n"
        + "200104 V- 2PAS-P-- ἦτε ἦτε ἦτε εἰμί \r\n"
        + "200104 A- ----NPM- τέλειοι τέλειοι τέλειοι τέλειος \r\n"
        + "200104 C- -------- καὶ καὶ καί καί \r\n"
        + "200104 A- ----NPM- ὁλόκληροι, ὁλόκληροι ὁλόκληροι ὁλόκληρος \r\n"
        + "200104 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200104 A- ----DSN- μηδενὶ μηδενὶ μηδενί μηδείς \r\n"
        + "200104 V- -PMPNPM- λειπόμενοι. λειπόμενοι λειπόμενοι λείπω \r\n"
        + "200105 C- -------- Εἰ Εἰ εἰ εἰ \r\n"
        + "200105 C- -------- δέ δέ δέ δέ \r\n"
        + "200105 RI ----NSM- τις τις τις τις \r\n"
        + "200105 RP ----GP-- ὑμῶν ὑμῶν ὑμῶν σύ \r\n"
        + "200105 V- 3PMI-S-- λείπεται λείπεται λείπεται λείπω \r\n"
        + "200105 N- ----GSF- σοφίας, σοφίας σοφίας σοφία \r\n"
        + "200105 V- 3PAD-S-- αἰτείτω αἰτείτω αἰτείτω αἰτέω \r\n"
        + "200105 P- -------- παρὰ παρὰ παρά παρά \r\n"
        + "200105 RA ----GSM- τοῦ τοῦ τοῦ ὁ \r\n"
        + "200105 V- -PAPGSM- διδόντος διδόντος διδόντος δίδωμι \r\n"
        + "200105 N- ----GSM- θεοῦ θεοῦ θεοῦ θεός \r\n"
        + "200105 A- ----DPM- πᾶσιν πᾶσιν πᾶσι(ν) πᾶς \r\n"
        + "200105 D- -------- ἁπλῶς ἁπλῶς ἁπλῶς ἁπλῶς \r\n"
        + "200105 C- -------- καὶ καὶ καί καί \r\n"
        + "200105 D- -------- ⸀μὴ μὴ μή μή \r\n"
        + "200105 V- -PAPGSM- ὀνειδίζοντος, ὀνειδίζοντος ὀνειδίζοντος ὀνειδίζω \r\n"
        + "200105 C- -------- καὶ καὶ καί καί \r\n"
        + "200105 V- 3FPI-S-- δοθήσεται δοθήσεται δοθήσεται δίδωμι \r\n"
        + "200105 RP ----DSM- αὐτῷ· αὐτῷ αὐτῷ αὐτός \r\n"
        + "200106 V- 3PAD-S-- αἰτείτω αἰτείτω αἰτείτω αἰτέω \r\n"
        + "200106 C- -------- δὲ δὲ δέ δέ \r\n"
        + "200106 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200106 N- ----DSF- πίστει, πίστει πίστει πίστις \r\n"
        + "200106 A- ----ASN- μηδὲν μηδὲν μηδέν μηδείς \r\n"
        + "200106 V- -PMPNSM- διακρινόμενος, διακρινόμενος διακρινόμενος διακρίνω \r\n"
        + "200106 RA ----NSM- ὁ ὁ ὁ ὁ \r\n"
        + "200106 C- -------- γὰρ γὰρ γάρ γάρ \r\n"
        + "200106 V- -PMPNSM- διακρινόμενος διακρινόμενος διακρινόμενος διακρίνω \r\n"
        + "200106 V- 3XAI-S-- ἔοικεν ἔοικεν ἔοικε(ν) ἔοικα \r\n"
        + "200106 N- ----DSM- κλύδωνι κλύδωνι κλύδωνι κλύδων \r\n"
        + "200106 N- ----GSF- θαλάσσης θαλάσσης θαλάσσης θάλασσα \r\n"
        + "200106 V- -PPPDSM- ἀνεμιζομένῳ ἀνεμιζομένῳ ἀνεμιζομένῳ ἀνεμίζομαι \r\n"
        + "200106 C- -------- καὶ καὶ καί καί \r\n"
        + "200106 V- -PPPDSM- ῥιπιζομένῳ· ῥιπιζομένῳ ῥιπιζομένῳ ῥιπίζομαι \r\n"
        + "200107 D- -------- μὴ μὴ μή μή \r\n"
        + "200107 C- -------- γὰρ γὰρ γάρ γάρ \r\n"
        + "200107 V- 3PMD-S-- οἰέσθω οἰέσθω οἰέσθω οἶμαι \r\n"
        + "200107 RA ----NSM- ὁ ὁ ὁ ὁ \r\n"
        + "200107 N- ----NSM- ἄνθρωπος ἄνθρωπος ἄνθρωπος ἄνθρωπος \r\n"
        + "200107 RD ----NSM- ἐκεῖνος ἐκεῖνος ἐκεῖνος ἐκεῖνος \r\n"
        + "200107 C- -------- ὅτι ὅτι ὅτι ὅτι \r\n"
        + "200107 V- 3FMI-S-- λήμψεταί λήμψεταί λήμψεται λαμβάνω \r\n"
        + "200107 RI ----ASN- τι τι τι τις \r\n"
        + "200107 P- -------- παρὰ παρὰ παρά παρά \r\n"
        + "200107 RA ----GSM- τοῦ τοῦ τοῦ ὁ \r\n"
        + "200107 N- ----GSM- κυρίου κυρίου κυρίου κύριος \r\n"
        + "200108 N- ----NSM- ἀνὴρ ἀνὴρ ἀνήρ ἀνήρ \r\n"
        + "200108 A- ----NSM- δίψυχος, δίψυχος δίψυχος δίψυχος \r\n"
        + "200108 A- ----NSM- ἀκατάστατος ἀκατάστατος ἀκατάστατος ἀκατάστατος \r\n"
        + "200108 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200108 A- ----DPF- πάσαις πάσαις πάσαις πᾶς \r\n"
        + "200108 RA ----DPF- ταῖς ταῖς ταῖς ὁ \r\n"
        + "200108 N- ----DPF- ὁδοῖς ὁδοῖς ὁδοῖς ὁδός \r\n"
        + "200108 RP ----GSM- αὐτοῦ. αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200109 V- 3PMD-S-- Καυχάσθω Καυχάσθω καυχάσθω καυχάομαι \r\n"
        + "200109 C- -------- δὲ δὲ δέ δέ \r\n"
        + "200109 RA ----NSM- ὁ ὁ ὁ ὁ \r\n"
        + "200109 N- ----NSM- ἀδελφὸς ἀδελφὸς ἀδελφός ἀδελφός \r\n"
        + "200109 RA ----NSM- ὁ ὁ ὁ ὁ \r\n"
        + "200109 A- ----NSM- ταπεινὸς ταπεινὸς ταπεινός ταπεινός \r\n"
        + "200109 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200109 RA ----DSN- τῷ τῷ τῷ ὁ \r\n"
        + "200109 N- ----DSN- ὕψει ὕψει ὕψει ὕψος \r\n"
        + "200109 RP ----GSM- αὐτοῦ, αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200110 RA ----NSM- ὁ ὁ ὁ ὁ \r\n"
        + "200110 C- -------- δὲ δὲ δέ δέ \r\n"
        + "200110 A- ----NSM- πλούσιος πλούσιος πλούσιος πλούσιος \r\n"
        + "200110 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200110 RA ----DSF- τῇ τῇ τῇ ὁ \r\n"
        + "200110 N- ----DSF- ταπεινώσει ταπεινώσει ταπεινώσει ταπείνωσις \r\n"
        + "200110 RP ----GSM- αὐτοῦ, αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200110 C- -------- ὅτι ὅτι ὅτι ὅτι \r\n"
        + "200110 C- -------- ὡς ὡς ὡς ὡς \r\n"
        + "200110 N- ----NSN- ἄνθος ἄνθος ἄνθος ἄνθος \r\n"
        + "200110 N- ----GSM- χόρτου χόρτου χόρτου χόρτος \r\n"
        + "200110 V- 3FMI-S-- παρελεύσεται. παρελεύσεται παρελεύσεται παρέρχομαι \r\n"
        + "200111 V- 3AAI-S-- ἀνέτειλεν ἀνέτειλεν ἀνέτειλε(ν) ἀνατέλλω \r\n"
        + "200111 C- -------- γὰρ γὰρ γάρ γάρ \r\n"
        + "200111 RA ----NSM- ὁ ὁ ὁ ὁ \r\n"
        + "200111 N- ----NSM- ἥλιος ἥλιος ἥλιος ἥλιος \r\n"
        + "200111 P- -------- σὺν σὺν σύν σύν \r\n"
        + "200111 RA ----DSM- τῷ τῷ τῷ ὁ \r\n"
        + "200111 N- ----DSM- καύσωνι καύσωνι καύσωνι καύσων \r\n"
        + "200111 C- -------- καὶ καὶ καί καί \r\n"
        + "200111 V- 3AAI-S-- ἐξήρανεν ἐξήρανεν ἐξήρανε(ν) ξηραίνω \r\n"
        + "200111 RA ----ASM- τὸν τὸν τόν ὁ \r\n"
        + "200111 N- ----ASM- χόρτον, χόρτον χόρτον χόρτος \r\n"
        + "200111 C- -------- καὶ καὶ καί καί \r\n"
        + "200111 RA ----NSN- τὸ τὸ τό ὁ \r\n"
        + "200111 N- ----NSN- ἄνθος ἄνθος ἄνθος ἄνθος \r\n"
        + "200111 RP ----GSM- αὐτοῦ αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200111 V- 3AAI-S-- ἐξέπεσεν ἐξέπεσεν ἐξέπεσε(ν) ἐκπίπτω \r\n"
        + "200111 C- -------- καὶ καὶ καί καί \r\n"
        + "200111 RA ----NSF- ἡ ἡ ἡ ὁ \r\n"
        + "200111 N- ----NSF- εὐπρέπεια εὐπρέπεια εὐπρέπεια εὐπρέπεια \r\n"
        + "200111 RA ----GSN- τοῦ τοῦ τοῦ ὁ \r\n"
        + "200111 N- ----GSN- προσώπου προσώπου προσώπου πρόσωπον \r\n"
        + "200111 RP ----GSN- αὐτοῦ αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200111 V- 3AMI-S-- ἀπώλετο· ἀπώλετο ἀπώλετο ἀπόλλυμι \r\n"
        + "200111 D- -------- οὕτως οὕτως οὕτω(ς) οὕτω(ς) \r\n"
        + "200111 D- -------- καὶ καὶ καί καί \r\n"
        + "200111 RA ----NSM- ὁ ὁ ὁ ὁ \r\n"
        + "200111 A- ----NSM- πλούσιος πλούσιος πλούσιος πλούσιος \r\n"
        + "200111 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200111 RA ----DPF- ταῖς ταῖς ταῖς ὁ \r\n"
        + "200111 N- ----DPF- πορείαις πορείαις πορείαις πορεία \r\n"
        + "200111 RP ----GSM- αὐτοῦ αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200111 V- 3FPI-S-- μαρανθήσεται. μαρανθήσεται μαρανθήσεται μαραίνομαι \r\n"
        + "200112 A- ----NSM- Μακάριος Μακάριος μακάριος μακάριος \r\n"
        + "200112 N- ----NSM- ἀνὴρ ἀνὴρ ἀνήρ ἀνήρ \r\n"
        + "200112 RR ----NSM- ὃς ὃς ὅς ὅς \r\n"
        + "200112 V- 3PAI-S-- ὑπομένει ὑπομένει ὑπομένει ὑπομένω \r\n"
        + "200112 N- ----ASM- πειρασμόν, πειρασμόν πειρασμόν πειρασμός \r\n"
        + "200112 C- -------- ὅτι ὅτι ὅτι ὅτι \r\n"
        + "200112 A- ----NSM- δόκιμος δόκιμος δόκιμος δόκιμος \r\n"
        + "200112 V- -AMPNSM- γενόμενος γενόμενος γενόμενος γίνομαι \r\n"
        + "200112 V- 3FMI-S-- λήμψεται λήμψεται λήμψεται λαμβάνω \r\n"
        + "200112 RA ----ASM- τὸν τὸν τόν ὁ \r\n"
        + "200112 N- ----ASM- στέφανον στέφανον στέφανον στέφανος \r\n"
        + "200112 RA ----GSF- τῆς τῆς τῆς ὁ \r\n"
        + "200112 N- ----GSF- ζωῆς, ζωῆς ζωῆς ζωή \r\n"
        + "200112 RR ----ASM- ὃν ὃν ὅν ὅς \r\n"
        + "200112 V- 3AMI-S-- ⸀ἐπηγγείλατο ἐπηγγείλατο ἐπηγγείλατο ἐπαγγέλλομαι \r\n"
        + "200112 RA ----DPM- τοῖς τοῖς τοῖς ὁ \r\n"
        + "200112 V- -PAPDPM- ἀγαπῶσιν ἀγαπῶσιν ἀγαπῶσι(ν) ἀγαπάω \r\n"
        + "200112 RP ----ASM- αὐτόν. αὐτόν αὐτόν αὐτός \r\n"
        + "200113 A- ----NSM- μηδεὶς μηδεὶς μηδείς μηδείς \r\n"
        + "200113 V- -PPPNSM- πειραζόμενος πειραζόμενος πειραζόμενος πειράζω \r\n"
        + "200113 V- 3PAD-S-- λεγέτω λεγέτω λεγέτω λέγω \r\n"
        + "200113 C- -------- ὅτι ὅτι ὅτι ὅτι \r\n"
        + "200113 P- -------- Ἀπὸ Ἀπὸ ἀπό ἀπό \r\n"
        + "200113 N- ----GSM- θεοῦ θεοῦ θεοῦ θεός \r\n"
        + "200113 V- 1PPI-S-- πειράζομαι· πειράζομαι πειράζομαι πειράζω \r\n"
        + "200113 RA ----NSM- ὁ ὁ ὁ ὁ \r\n"
        + "200113 C- -------- γὰρ γὰρ γάρ γάρ \r\n"
        + "200113 N- ----NSM- θεὸς θεὸς θεός θεός \r\n"
        + "200113 A- ----NSM- ἀπείραστός ἀπείραστός ἀπείραστος ἀπείραστος \r\n"
        + "200113 V- 3PAI-S-- ἐστιν ἐστιν ἐστί(ν) εἰμί \r\n"
        + "200113 A- ----GPN- κακῶν, κακῶν κακῶν κακός \r\n"
        + "200113 V- 3PAI-S-- πειράζει πειράζει πειράζει πειράζω \r\n"
        + "200113 C- -------- δὲ δὲ δέ δέ \r\n"
        + "200113 RP ----NSM- αὐτὸς αὐτὸς αὐτός αὐτός \r\n"
        + "200113 A- ----ASM- οὐδένα. οὐδένα οὐδένα οὐδείς \r\n"
        + "200114 A- ----NSM- ἕκαστος ἕκαστος ἕκαστος ἕκαστος \r\n"
        + "200114 C- -------- δὲ δὲ δέ δέ \r\n"
        + "200114 V- 3PPI-S-- πειράζεται πειράζεται πειράζεται πειράζω \r\n"
        + "200114 P- -------- ὑπὸ ὑπὸ ὑπό ὑπό \r\n"
        + "200114 RA ----GSF- τῆς τῆς τῆς ὁ \r\n"
        + "200114 A- ----GSF- ἰδίας ἰδίας ἰδίας ἴδιος \r\n"
        + "200114 N- ----GSF- ἐπιθυμίας ἐπιθυμίας ἐπιθυμίας ἐπιθυμία \r\n"
        + "200114 V- -PPPNSM- ἐξελκόμενος ἐξελκόμενος ἐξελκόμενος ἐξέλκω \r\n"
        + "200114 C- -------- καὶ καὶ καί καί \r\n"
        + "200114 V- -PPPNSM- δελεαζόμενος· δελεαζόμενος δελεαζόμενος δελεάζω \r\n"
        + "200115 D- -------- εἶτα εἶτα εἶτα εἶτα \r\n"
        + "200115 RA ----NSF- ἡ ἡ ἡ ὁ \r\n"
        + "200115 N- ----NSF- ἐπιθυμία ἐπιθυμία ἐπιθυμία ἐπιθυμία \r\n"
        + "200115 V- -AAPNSF- συλλαβοῦσα συλλαβοῦσα συλλαβοῦσα συλλαμβάνω \r\n"
        + "200115 V- 3PAI-S-- τίκτει τίκτει τίκτει τίκτω \r\n"
        + "200115 N- ----ASF- ἁμαρτίαν, ἁμαρτίαν ἁμαρτίαν ἁμαρτία \r\n"
        + "200115 RA ----NSF- ἡ ἡ ἡ ὁ \r\n"
        + "200115 C- -------- δὲ δὲ δέ δέ \r\n"
        + "200115 N- ----NSF- ἁμαρτία ἁμαρτία ἁμαρτία ἁμαρτία \r\n"
        + "200115 V- -APPNSF- ἀποτελεσθεῖσα ἀποτελεσθεῖσα ἀποτελεσθεῖσα ἀποτελέω \r\n"
        + "200115 V- 3PAI-S-- ἀποκύει ἀποκύει ἀποκύει ἀποκυέω \r\n"
        + "200115 N- ----ASM- θάνατον. θάνατον θάνατον θάνατος \r\n"
        + "200116 D- -------- μὴ μὴ μή μή \r\n"
        + "200116 V- 2PPD-P-- πλανᾶσθε, πλανᾶσθε πλανᾶσθε πλανάω \r\n"
        + "200116 N- ----VPM- ἀδελφοί ἀδελφοί ἀδελφοί ἀδελφός \r\n"
        + "200116 RP ----GS-- μου μου μου ἐγώ \r\n"
        + "200116 A- ----VPM- ἀγαπητοί. ἀγαπητοί ἀγαπητοί ἀγαπητός \r\n"
        + "200117 A- ----NSF- Πᾶσα Πᾶσα πᾶσα πᾶς \r\n"
        + "200117 N- ----NSF- δόσις δόσις δόσις δόσις \r\n"
        + "200117 A- ----NSF- ἀγαθὴ ἀγαθὴ ἀγαθή ἀγαθός \r\n"
        + "200117 C- -------- καὶ καὶ καί καί \r\n"
        + "200117 A- ----NSN- πᾶν πᾶν πᾶν πᾶς \r\n"
        + "200117 N- ----NSN- δώρημα δώρημα δώρημα δώρημα \r\n"
        + "200117 A- ----NSN- τέλειον τέλειον τέλειον τέλειος \r\n"
        + "200117 D- -------- ἄνωθέν ἄνωθέν ἄνωθεν ἄνωθεν \r\n"
        + "200117 V- 3PAI-S-- ἐστιν, ἐστιν ἐστί(ν) εἰμί \r\n"
        + "200117 V- -PAPNSN- καταβαῖνον καταβαῖνον καταβαῖνον καταβαίνω \r\n"
        + "200117 P- -------- ἀπὸ ἀπὸ ἀπό ἀπό \r\n"
        + "200117 RA ----GSM- τοῦ τοῦ τοῦ ὁ \r\n"
        + "200117 N- ----GSM- πατρὸς πατρὸς πατρός πατήρ \r\n"
        + "200117 RA ----GPN- τῶν τῶν τῶν ὁ \r\n"
        + "200117 N- ----GPN- φώτων, φώτων φώτων φῶς \r\n"
        + "200117 P- -------- παρ’ παρ’ παρά παρά \r\n"
        + "200117 RR ----DSM- ᾧ ᾧ ᾧ ὅς \r\n"
        + "200117 D- -------- οὐκ οὐκ οὐ οὐ \r\n"
        + "200117 V- 3PAI-S-- ἔνι ἔνι ἔνι ἔνι \r\n"
        + "200117 N- ----NSF- παραλλαγὴ παραλλαγὴ παραλλαγή παραλλαγή \r\n"
        + "200117 C- -------- ἢ ἢ ἤ ἤ \r\n"
        + "200117 N- ----GSF- τροπῆς τροπῆς τροπῆς τροπή \r\n"
        + "200117 N- ----NSN- ἀποσκίασμα. ἀποσκίασμα ἀποσκίασμα ἀποσκίασμα \r\n"
        + "200118 V- -APPNSM- βουληθεὶς βουληθεὶς βουληθείς βούλομαι \r\n"
        + "200118 V- 3AAI-S-- ἀπεκύησεν ἀπεκύησεν ἀπεκύησε(ν) ἀποκυέω \r\n"
        + "200118 RP ----AP-- ἡμᾶς ἡμᾶς ἡμᾶς ἐγώ \r\n"
        + "200118 N- ----DSM- λόγῳ λόγῳ λόγῳ λόγος \r\n"
        + "200118 N- ----GSF- ἀληθείας, ἀληθείας ἀληθείας ἀλήθεια \r\n"
        + "200118 P- -------- εἰς εἰς εἰς εἰς \r\n"
        + "200118 RA ----ASN- τὸ τὸ τό ὁ \r\n"
        + "200118 V- -PAN---- εἶναι εἶναι εἶναι εἰμί \r\n"
        + "200118 RP ----AP-- ἡμᾶς ἡμᾶς ἡμᾶς ἐγώ \r\n"
        + "200118 N- ----ASF- ἀπαρχήν ἀπαρχήν ἀπαρχήν ἀπαρχή \r\n"
        + "200118 RI ----ASF- τινα τινα τινα τις \r\n"
        + "200118 RA ----GPN- τῶν τῶν τῶν ὁ \r\n"
        + "200118 RP ----GSM- αὐτοῦ αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200118 N- ----GPN- κτισμάτων. κτισμάτων κτισμάτων κτίσμα \r\n"
        + "200119 V- 2XAD-P-- ⸀Ἴστε, Ἴστε ἴστε οἶδα \r\n"
        + "200119 N- ----VPM- ἀδελφοί ἀδελφοί ἀδελφοί ἀδελφός \r\n"
        + "200119 RP ----GS-- μου μου μου ἐγώ \r\n"
        + "200119 A- ----VPM- ἀγαπητοί. ἀγαπητοί ἀγαπητοί ἀγαπητός \r\n"
        + "200119 V- 3PAD-S-- ἔστω ἔστω ἔστω εἰμί \r\n"
        + "200119 C- -------- ⸀δὲ δὲ δέ δέ \r\n"
        + "200119 A- ----NSM- πᾶς πᾶς πᾶς πᾶς \r\n"
        + "200119 N- ----NSM- ἄνθρωπος ἄνθρωπος ἄνθρωπος ἄνθρωπος \r\n"
        + "200119 A- ----NSM- ταχὺς ταχὺς ταχύς ταχύς \r\n"
        + "200119 P- -------- εἰς εἰς εἰς εἰς \r\n"
        + "200119 RA ----ASN- τὸ τὸ τό ὁ \r\n"
        + "200119 V- -AAN---- ἀκοῦσαι, ἀκοῦσαι ἀκοῦσαι ἀκούω \r\n"
        + "200119 A- ----NSM- βραδὺς βραδὺς βραδύς βραδύς \r\n"
        + "200119 P- -------- εἰς εἰς εἰς εἰς \r\n"
        + "200119 RA ----ASN- τὸ τὸ τό ὁ \r\n"
        + "200119 V- -AAN---- λαλῆσαι, λαλῆσαι λαλῆσαι λαλέω \r\n"
        + "200119 A- ----NSM- βραδὺς βραδὺς βραδύς βραδύς \r\n"
        + "200119 P- -------- εἰς εἰς εἰς εἰς \r\n"
        + "200119 N- ----ASF- ὀργήν, ὀργήν ὀργήν ὀργή \r\n"
        + "200120 N- ----NSF- ὀργὴ ὀργὴ ὀργή ὀργή \r\n"
        + "200120 C- -------- γὰρ γὰρ γάρ γάρ \r\n"
        + "200120 N- ----GSM- ἀνδρὸς ἀνδρὸς ἀνδρός ἀνήρ \r\n"
        + "200120 N- ----ASF- δικαιοσύνην δικαιοσύνην δικαιοσύνην δικαιοσύνη \r\n"
        + "200120 N- ----GSM- θεοῦ θεοῦ θεοῦ θεός \r\n"
        + "200120 D- -------- ⸂οὐκ οὐκ οὐ οὐ \r\n"
        + "200120 V- 3PMI-S-- ἐργάζεται⸃. ἐργάζεται ἐργάζεται ἐργάζομαι \r\n"
        + "200121 C- -------- διὸ διὸ διό διό \r\n"
        + "200121 V- -AMPNPM- ἀποθέμενοι ἀποθέμενοι ἀποθέμενοι ἀποτίθημι \r\n"
        + "200121 A- ----ASF- πᾶσαν πᾶσαν πᾶσαν πᾶς \r\n"
        + "200121 N- ----ASF- ῥυπαρίαν ῥυπαρίαν ῥυπαρίαν ῥυπαρία \r\n"
        + "200121 C- -------- καὶ καὶ καί καί \r\n"
        + "200121 N- ----ASF- περισσείαν περισσείαν περισσείαν περισσεία \r\n"
        + "200121 N- ----GSF- κακίας κακίας κακίας κακία \r\n"
        + "200121 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200121 N- ----DSF- πραΰτητι πραΰτητι πραΰτητι πραΰτης \r\n"
        + "200121 V- 2AMD-P-- δέξασθε δέξασθε δέξασθε δέχομαι \r\n"
        + "200121 RA ----ASM- τὸν τὸν τόν ὁ \r\n"
        + "200121 A- ----ASM- ἔμφυτον ἔμφυτον ἔμφυτον ἔμφυτος \r\n"
        + "200121 N- ----ASM- λόγον λόγον λόγον λόγος \r\n"
        + "200121 RA ----ASM- τὸν τὸν τόν ὁ \r\n"
        + "200121 V- -PMPASM- δυνάμενον δυνάμενον δυνάμενον δύναμαι \r\n"
        + "200121 V- -AAN---- σῶσαι σῶσαι σῶσαι σῴζω \r\n"
        + "200121 RA ----APF- τὰς τὰς τάς ὁ \r\n"
        + "200121 N- ----APF- ψυχὰς ψυχὰς ψυχάς ψυχή \r\n"
        + "200121 RP ----GP-- ὑμῶν. ὑμῶν ὑμῶν σύ \r\n"
        + "200122 V- 2PMD-P-- Γίνεσθε Γίνεσθε γίνεσθε γίνομαι \r\n"
        + "200122 C- -------- δὲ δὲ δέ δέ \r\n"
        + "200122 N- ----NPM- ποιηταὶ ποιηταὶ ποιηταί ποιητής \r\n"
        + "200122 N- ----GSM- λόγου λόγου λόγου λόγος \r\n"
        + "200122 C- -------- καὶ καὶ καί καί \r\n"
        + "200122 D- -------- μὴ μὴ μή μή \r\n"
        + "200122 N- ----NPM- ⸂ἀκροαταὶ ἀκροαταὶ ἀκροαταί ἀκροατής \r\n"
        + "200122 A- ----ASN- μόνον⸃ μόνον μόνον μόνος \r\n"
        + "200122 V- -PMPNPM- παραλογιζόμενοι παραλογιζόμενοι παραλογιζόμενοι παραλογίζομαι \r\n"
        + "200122 RP ----APM- ἑαυτούς. ἑαυτούς ἑαυτούς ἑαυτοῦ \r\n"
        + "200123 C- -------- ὅτι ὅτι ὅτι ὅτι \r\n"
        + "200123 C- -------- εἴ εἴ εἰ εἰ \r\n"
        + "200123 RI ----NSM- τις τις τις τις \r\n"
        + "200123 N- ----NSM- ἀκροατὴς ἀκροατὴς ἀκροατής ἀκροατής \r\n"
        + "200123 N- ----GSM- λόγου λόγου λόγου λόγος \r\n"
        + "200123 V- 3PAI-S-- ἐστὶν ἐστὶν ἐστί(ν) εἰμί \r\n"
        + "200123 C- -------- καὶ καὶ καί καί \r\n"
        + "200123 D- -------- οὐ οὐ οὐ οὐ \r\n"
        + "200123 N- ----NSM- ποιητής, ποιητής ποιητής ποιητής \r\n"
        + "200123 RD ----NSM- οὗτος οὗτος οὗτος οὗτος \r\n"
        + "200123 V- 3XAI-S-- ἔοικεν ἔοικεν ἔοικε(ν) ἔοικα \r\n"
        + "200123 N- ----DSM- ἀνδρὶ ἀνδρὶ ἀνδρί ἀνήρ \r\n"
        + "200123 V- -PAPDSM- κατανοοῦντι κατανοοῦντι κατανοοῦντι κατανοέω \r\n"
        + "200123 RA ----ASN- τὸ τὸ τό ὁ \r\n"
        + "200123 N- ----ASN- πρόσωπον πρόσωπον πρόσωπον πρόσωπον \r\n"
        + "200123 RA ----GSF- τῆς τῆς τῆς ὁ \r\n"
        + "200123 N- ----GSF- γενέσεως γενέσεως γενέσεως γένεσις \r\n"
        + "200123 RP ----GSM- αὐτοῦ αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200123 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200123 N- ----DSN- ἐσόπτρῳ, ἐσόπτρῳ ἐσόπτρῳ ἔσοπτρον \r\n"
        + "200124 V- 3AAI-S-- κατενόησεν κατενόησεν κατενόησε(ν) κατανοέω \r\n"
        + "200124 C- -------- γὰρ γὰρ γάρ γάρ \r\n"
        + "200124 RP ----ASM- ἑαυτὸν ἑαυτὸν ἑαυτόν ἑαυτοῦ \r\n"
        + "200124 C- -------- καὶ καὶ καί καί \r\n"
        + "200124 V- 3XAI-S-- ἀπελήλυθεν ἀπελήλυθεν ἀπελήλυθε(ν) ἀπέρχομαι \r\n"
        + "200124 C- -------- καὶ καὶ καί καί \r\n"
        + "200124 D- -------- εὐθέως εὐθέως εὐθέως εὐθέως \r\n"
        + "200124 V- 3AMI-S-- ἐπελάθετο ἐπελάθετο ἐπελάθετο ἐπιλανθάνομαι \r\n"
        + "200124 RI ----NSM- ὁποῖος ὁποῖος ὁποῖος ὁποῖος \r\n"
        + "200124 V- 3IAI-S-- ἦν. ἦν ἦν εἰμί \r\n"
        + "200125 RA ----NSM- ὁ ὁ ὁ ὁ \r\n"
        + "200125 C- -------- δὲ δὲ δέ δέ \r\n"
        + "200125 V- -AAPNSM- παρακύψας παρακύψας παρακύψας παρακύπτω \r\n"
        + "200125 P- -------- εἰς εἰς εἰς εἰς \r\n"
        + "200125 N- ----ASM- νόμον νόμον νόμον νόμος \r\n"
        + "200125 A- ----ASM- τέλειον τέλειον τέλειον τέλειος \r\n"
        + "200125 RA ----ASM- τὸν τὸν τόν ὁ \r\n"
        + "200125 RA ----GSF- τῆς τῆς τῆς ὁ \r\n"
        + "200125 N- ----GSF- ἐλευθερίας ἐλευθερίας ἐλευθερίας ἐλευθερία \r\n"
        + "200125 C- -------- καὶ καὶ καί καί \r\n"
        + "200125 V- -AAPNSM- παραμείνας, παραμείνας παραμείνας παραμένω \r\n"
        + "200125 D- -------- ⸀οὐκ οὐκ οὐ οὐ \r\n"
        + "200125 N- ----NSM- ἀκροατὴς ἀκροατὴς ἀκροατής ἀκροατής \r\n"
        + "200125 N- ----GSF- ἐπιλησμονῆς ἐπιλησμονῆς ἐπιλησμονῆς ἐπιλησμονή \r\n"
        + "200125 V- -AMPNSM- γενόμενος γενόμενος γενόμενος γίνομαι \r\n"
        + "200125 C- -------- ἀλλὰ ἀλλὰ ἀλλά ἀλλά \r\n"
        + "200125 N- ----NSM- ποιητὴς ποιητὴς ποιητής ποιητής \r\n"
        + "200125 N- ----GSN- ἔργου, ἔργου ἔργου ἔργον \r\n"
        + "200125 RD ----NSM- οὗτος οὗτος οὗτος οὗτος \r\n"
        + "200125 A- ----NSM- μακάριος μακάριος μακάριος μακάριος \r\n"
        + "200125 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200125 RA ----DSF- τῇ τῇ τῇ ὁ \r\n"
        + "200125 N- ----DSF- ποιήσει ποιήσει ποιήσει ποίησις \r\n"
        + "200125 RP ----GSM- αὐτοῦ αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200125 V- 3FMI-S-- ἔσται. ἔσται ἔσται εἰμί \r\n"
        + "200126 C- -------- Εἴ Εἴ εἰ εἰ \r\n"
        + "200126 RI ----NSM- τις τις τις τις \r\n"
        + "200126 V- 3PAI-S-- δοκεῖ δοκεῖ δοκεῖ δοκέω \r\n"
        + "200126 A- ----NSM- θρησκὸς θρησκὸς θρησκός θρησκός \r\n"
        + "200126 V- -PAN---- ⸀εἶναι εἶναι εἶναι εἰμί \r\n"
        + "200126 D- -------- μὴ μὴ μή μή \r\n"
        + "200126 V- -PAPNSM- χαλιναγωγῶν χαλιναγωγῶν χαλιναγωγῶν χαλιναγωγέω \r\n"
        + "200126 N- ----ASF- γλῶσσαν γλῶσσαν γλῶσσαν γλῶσσα \r\n"
        + "200126 RP ----GSM- ⸀αὐτοῦ αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200126 C- -------- ἀλλὰ ἀλλὰ ἀλλά ἀλλά \r\n"
        + "200126 V- -PAPNSM- ἀπατῶν ἀπατῶν ἀπατῶν ἀπατάω \r\n"
        + "200126 N- ----ASF- καρδίαν καρδίαν καρδίαν καρδία \r\n"
        + "200126 RP ----GSM- ⸀αὐτοῦ, αὐτοῦ αὐτοῦ αὐτός \r\n"
        + "200126 RD ----GSM- τούτου τούτου τούτου οὗτος \r\n"
        + "200126 A- ----NSF- μάταιος μάταιος μάταιος μάταιος \r\n"
        + "200126 RA ----NSF- ἡ ἡ ἡ ὁ \r\n"
        + "200126 N- ----NSF- θρησκεία. θρησκεία θρησκεία θρησκεία \r\n"
        + "200127 N- ----NSF- θρησκεία θρησκεία θρησκεία θρησκεία \r\n"
        + "200127 A- ----NSF- καθαρὰ καθαρὰ καθαρά καθαρός \r\n"
        + "200127 C- -------- καὶ καὶ καί καί \r\n"
        + "200127 A- ----NSF- ἀμίαντος ἀμίαντος ἀμίαντος ἀμίαντος \r\n"
        + "200127 P- -------- παρὰ παρὰ παρά παρά \r\n"
        + "200127 RA ----DSM- ⸀τῷ τῷ τῷ ὁ \r\n"
        + "200127 N- ----DSM- θεῷ θεῷ θεῷ θεός \r\n"
        + "200127 C- -------- καὶ καὶ καί καί \r\n"
        + "200127 N- ----DSM- πατρὶ πατρὶ πατρί πατήρ \r\n"
        + "200127 RD ----NSF- αὕτη αὕτη αὕτη οὗτος \r\n"
        + "200127 V- 3PAI-S-- ἐστίν, ἐστίν ἐστί(ν) εἰμί \r\n"
        + "200127 V- -PMN---- ἐπισκέπτεσθαι ἐπισκέπτεσθαι ἐπισκέπτεσθαι ἐπισκέπτομαι \r\n"
        + "200127 A- ----APM- ὀρφανοὺς ὀρφανοὺς ὀρφανούς ὀρφανός \r\n"
        + "200127 C- -------- καὶ καὶ καί καί \r\n"
        + "200127 A- ----APF- χήρας χήρας χήρας χήρα \r\n"
        + "200127 P- -------- ἐν ἐν ἐν ἐν \r\n"
        + "200127 RA ----DSF- τῇ τῇ τῇ ὁ \r\n"
        + "200127 N- ----DSF- θλίψει θλίψει θλίψει θλῖψις \r\n"
        + "200127 RP ----GPM- αὐτῶν, αὐτῶν αὐτῶν αὐτός \r\n"
        + "200127 A- ----ASM- ἄσπιλον ἄσπιλον ἄσπιλον ἄσπιλος \r\n"
        + "200127 RP ----ASM- ἑαυτὸν ἑαυτὸν ἑαυτόν ἑαυτοῦ \r\n"
        + "200127 V- -PAN---- τηρεῖν τηρεῖν τηρεῖν τηρέω \r\n"
        + "200127 P- -------- ἀπὸ ἀπὸ ἀπό ἀπό \r\n"
        + "200127 RA ----GSM- τοῦ τοῦ τοῦ ὁ \r\n"
        + "200127 N- ----GSM- κόσμου. κόσμου κόσμου κόσμος \r\n"
        + "";
    }
}