/* SCRIPT BY YOUR MOM */
'use strict'
const JOB_ZERK =3;

// Berserker Skills

const SKILL_STAGGERING_STRIKE = 61100; // C_START_SKILL
const SKILL_STAGGERING_STRIKE_DURATION =1275;
const SKILL_STAGGERING_STRIKE_DISTANCE =66;
const SKILL_FLATTEN = 40900; // C_START_SKILL
const SKILL_FLATTEN_DURATION =3100;
const SKILL_FLATTEN_DISTANCE =75;
const SKILL_LEAPING_STRIKE = 110800; // C_START_SKILL
const SKILL_LEAPING_STRIKE_DURATION =2250;
const SKILL_LEAPING_STRIKE_DISTANCE = 100;//250;
const SKILL_TACKLE = 260100; // C_START_SKILL
const SKILL_TACKLE_DURATION =990;
const SKILL_TACKLE_DISTANCE =80;
const SKILL_RAZE = 250900; // C_START_SKILL
const SKILL_RAZE_DURATION = 1200; //960
const SKILL_RAZE_DISTANCE =96;

const SKILL_LETHAL_STRIKE = 180600; // C_PRESS_SKILL
const SKILL_LETHAL_STRIKE_1 = 180610; // C_START_SKILL
const SKILL_LETHAL_STRIKE_2 = 180611; // C_START_SKILL
const SKILL_LETHAL_STRIKE_3 = 180612; // C_START_SKILL
const SKILL_LETHAL_STRIKE_4 = 180613; // C_START_SKILL
const SKILL_LETHAL_STRIKE_DURATION =770;
const SKILL_LETHAL_STRIKE_CAST =1550;
const SKILL_LETHAL_STRIKE_DISTANCE =170;
const SKILL_LETHAL_CHAIN_DURATION =550;
const SKILL_LETHAL_UNCHAIN_DURATION =680;

const SKILL_VAMPIRIC_BLOW = 151000; // C_PRESS_SKILL
const SKILL_VAMPIRIC_BLOW_1 = 151010; // C_START_SKILL
const SKILL_VAMPIRIC_BLOW_2 = 151011; // C_START_SKILL
const SKILL_VAMPIRIC_BLOW_3 = 151012; // C_START_SKILL
const SKILL_VAMPIRIC_BLOW_4 = 151013; // C_START_SKILL
const SKILL_VAMPIRIC_BLOW_CHAIN = 151014; // C_START_SKILL
const SKILL_VAMPIRIC_BLOW_DURATION =780;
const SKILL_VAMPIRIC_BLOW_CAST =1950;
const SKILL_VAMPIRIC_BLOW_DISTANCE =70;

const SKILL_CYCLONE = 101100; // C_PRESS_SKILL 101100
const SKILL_CYCLONE_1 = 101110; // C_START_SKILL, stage 0
const SKILL_CYCLONE_2 = 101111; // C_START_SKILL, stage 0-2
const SKILL_CYCLONE_3 = 101112; // C_START_SKILL, stage 0-3
const SKILL_CYCLONE_4 = 101113; // C_START_SKILL, stage 0-4
const SKILL_CYCLONE_DURATION = 650; // duration per charge
const SKILL_CYCLONE_SPIN = 370; // duration per spin
const SKILL_CYCLONE_DISTANCE =35;

const SKILL_THUNDERSTRIKE = 31113; // C_PRESS_SKILL  31100
const SKILL_THUNDERSTRIKE_1 = 31110; // C_START_SKILL
const SKILL_THUNDERSTRIKE_2 = 31111; // C_START_SKILL
const SKILL_THUNDERSTRIKE_3 = 31112; // C_START_SKILL
const SKILL_THUNDERSTRIKE_4 = 31113; // C_START_SKILL
const SKILL_THUNDERSTRIKE_DURATION = 650; // duration per charge
const SKILL_THUNDERSTRIKE_CAST = 1720; // duration per cast
const SKILL_THUNDERSTRIKE_DISTANCE =70;

const SKILL_EVASIVE_ROLL = 290100; // C_START_SKILL
const SKILL_EVASIVE_ROLL_DURATION =880;
const SKILL_EVASIVE_ROLL_DISTANCE = 70; //150

const SKILL_EVASIVE_SMASH_ROLL = 240200; // C_START_SKILL
const SKILL_EVASIVE_SMASH_ROLL_DURATION =970;
const SKILL_EVASIVE_SMASH_ROLL_DISTANCE = 70; //150

const SKILL_EVASIVE_SMASH_HIT_INIT =240205;
const SKILL_EVASIVE_SMASH_HIT_1 = 240210; // C_START_SKILL
const SKILL_EVASIVE_SMASH_HIT_2 = 240211; // C_START_SKILL
const SKILL_EVASIVE_SMASH_HIT_3 = 240212; // C_START_SKILL
const SKILL_EVASIVE_SMASH_HIT_4 = 240213; // C_START_SKILL
const SKILL_EVASIVE_SMASH_HIT_DURATION =1810;
const SKILL_EVASIVE_SMASH_HIT_DISTANCE =305;

const SKILL_AXE_BLOCK = 20230; // C_PRESS_SKILL
const SKILL_AXE_BLOCK_2 =20231;

const SKILL_UNCHAINED_ANGER = 120700; // C_START_SKILL, stage 0, stage 1
const SKILL_UNCHAINED_ANGER_DURATION_1 =820;
const SKILL_UNCHAINED_ANGER_DURATION_2 =420;
const SKILL_TENACITY = 190300; // C_START_SKILL, stage 0, stage 1
const SKILL_TENACITY_DURATION_1 =500;
const SKILL_TENACITY_DURATION_2 =690;
const SKILL_MOCKING_SHOUT = 70100; // C_START_SKILL, stage 0, stage 1
const SKILL_MOCKING_SHOUT_DURATION_1 =300;
const SKILL_MOCKING_SHOUT_DURATION_2 =1050;
const SKILL_FEARSOME_SHOUT = 160400; // C_START_SKILL
const SKILL_FEARSOME_SHOUT_DURATION_1 =720;
const SKILL_FEARSOME_SHOUT_DURATION_2 =1400;
const SKILL_FIERY_RAGE = 80600; // C_START_SKILL
const SKILL_FIERY_RAGE_DURATION =1300;
const SKILL_BLOODLUST = 210200; // C_START_SKILL
const SKILL_BLOODLUST_DURATION =700;
const SKILL_DASH = 50200; // C_START_SKILL
const SKILL_DASH_DURATION =700;
const SKILL_UNBREAKABLE = 270100; // C_START_SKILL
const SKILL_UNBREAKABLE_DURATION =2060;
const SKILL_TRIUMPHANT_SHOUT = 90200; // C_START_SKILL
const SKILL_TRIUMPHANT_SHOUT_DURATION =815;

const SKILL_AXE_COUNTER =300100;
const SKILL_INESCAPABLE_DOOM =200200;

const SKILL_PUNISHING_STRIKE =320100;
const SKILL_PUNISHING_STRIKE_DURATION =770;
const SKILL_PUNISHING_STRIKE_2 =320101;
const SKILL_PUNISHING_STRIKE_2_DURATION =785;

const S_P =11200;
const S_P2 =11201;
const S_P3 =11202;
const S_P4 =11203;
const S_P_D =1140;
const S_P2_D =925;
const S_P3_D =1105;
const S_P4_D =1825;

const SKILL_BLOCK =20230;

const SKILL_RETALIATE =131000;
const SKILL_RETALIATE_DURATION =1640;

const SKILL_FLATTEN_2 =40901;
const SKILL_RAZE_2 =250901;
const SKILL_STAGGERING_STRIKE_2 =61101;

const SKILL_CHARGING =311000;
const SKILL_CHARGING_DISTANCE =494;
const SKILL_CHARGING_DURATION =1110;
const SKILL_CHARGING_2 =311001;
const SKILL_CHARGING_2_DURATION =1355;

const SKILL_BERSERK_EX =330100;
const SKILL_BERSERK_EX_STAGE0 =690;
const SKILL_BERSERK_EX_STAGE1 =1530;
const SKILL_BERSERK_EX_STAGE2 =1750;

const L_CLICK_EX =350100;
const L_CLICK_EX_STAGE0 = 1965; //1130;
const L_CLICK_EX_STAGE1 = 0; //835;
const L_CLICK_EX_DISTANCE =200;
const L_CLICK_CHAIN1 = 1460; //625; //710
const L_CLICK_CHAIN2 = 0; //835; //885

const R_CLICK_EX =340100;
const R_CLICK_EX_STAGE0 = 2270; //610;
const R_CLICK_EX_STAGE1 = 0; //830;
const R_CLICK_EX_STAGE2 = 0; //830;
const R_CLICK_CHAIN1 = 1670; //835; //910
const R_CLICK_CHAIN2 = 0; //835; //940

const SKILL_ONE_EX =360100;
const SKILL_ONE_EX_DURATION =2715;
const SKILL_ONE_CHAIN_DURATION = 1600; //1730

const SKILL_TWO_EX =370100;
const SKILL_TWO_EX_STAGE0 =600;
const SKILL_TWO_EX_STAGE1 =715;
const SKILL_TWO_EX_STAGE2 =710;
const SKILL_TWO_EX_STAGE3 =400;
const SKILL_TWO_EX_STAGE4 =1095;

module.exports = function zerk(dispatch) {
	let config = {};
	let settingTimeout = null;
	let settingLock = false;

	const path = require('path');
	const fs = require('fs');

	try { config = require('./config.json'); }
	catch (e) {
		config = {};
		settingUpdate();
	}

	function settingUpdate() {
		clearTimeout(settingTimeout);
		settingTimeout = setTimeout(settingSave,1000);
	}

	function settingSave() {
		if (settingLock) {
			settingUpdate();
			return;
		}

		settingLock = false;
		fs.writeFile(path.join(__dirname, 'config.json'), JSON.stringify(config, undefined, '\t'), err => {
			settingLock = false;
		});
	}


	//change GLOBAL_LATENCY to your lowest usual ping
	let GLOBAL_LATENCY =0;
	if (("GLOBAL_LATENCY" in config)) {
		GLOBAL_LATENCY = config.GLOBAL_LATENCY;
	}
	if (!("GLOBAL_LATENCY" in config)) {
		config.GLOBAL_LATENCY =0;
		config.GLOBAL_LATENCY_DESCRIPTION = "change GLOBAL_LATENCY to your lowest usual ping";
		settingUpdate();
	}

	let DISABLE_CHARGE = false;
	if (("DISABLE_CHARGE" in config)) {
		DISABLE_CHARGE = config.DISABLE_CHARGE;
	}
	if (!("DISABLE_CHARGE" in config)) {
		config.DISABLE_CHARGE = false;
		config.DISABLE_CHARGE_DESCRIPTION = "this will disable charge bar emulation, useful for people who have unstable net and prone to get stuck or server lagging badly";
		config.DISABLE_CHARGE_DESCRIPTION_2 = "disabling charge actually does not significantly impact ping tax, because charge skills are actually not ping taxed if you simply release the skill early";
		settingUpdate();
	}
	let SPOOF_GRANT = true;
	if (("SPOOF_GRANT" in config)) {
		SPOOF_GRANT = config.SPOOF_GRANT;
	}
	if (!("SPOOF_GRANT" in config)) {
		config.SPOOF_GRANT = true;
		config.SPOOF_GRANT_DESCRIPTION = "greatly speeds up charging skills, however may cause asynchronization with high jitter";
		settingUpdate();
	}

	let SLOW_SIN_DEX = false;

	let DISABLE_VAMP_CHECK = true;
	if (("DISABLE_VAMP_CHECK" in config)) {
		DISABLE_VAMP_CHECK = config.DISABLE_VAMP_CHECK;
	}
	if (!("DISABLE_VAMP_CHECK" in config)) {
		config.DISABLE_VAMP_CHECK = true;
		config.DISABLE_VAMP_CHECK_DESCRIPTION = "Disable overcharge vampiric check. Enable this if you're having issues with vamp not chaining after TS/cyclone.";
		settingUpdate();
	}

	let BLOCK_KEY = "tab";
	if (("BLOCK_KEY" in config)) {
		BLOCK_KEY = config.BLOCK_KEY;
	}
	if (!("BLOCK_KEY" in config)) {
		config.BLOCK_KEY = "tab";
		config.BLOCK_KEY_DESCRIPTION = "Key for block, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let FLATTEN_CANCEL = false;
	if (("FLATTEN_CANCEL" in config)) {
		FLATTEN_CANCEL = config.FLATTEN_CANCEL;
	}
	if (!("FLATTEN_CANCEL" in config)) {
		config.FLATTEN_CANCEL = true;
		config.FLATTEN_CANCEL_DESCRIPTION = "Auto block cancel flatten, requires robotjs.";
		settingUpdate();
	}

	let STAGGERING_CANCEL = false;
	if (("STAGGERING_CANCEL" in config)) {
		STAGGERING_CANCEL = config.STAGGERING_CANCEL;
	}
	if (!("STAGGERING_CANCEL" in config)) {
		config.STAGGERING_CANCEL = false;
		config.STAGGERING_CANCEL_DESCRIPTION = "Auto block cancel staggering strike, requires robotjs.";
		settingUpdate();
	}

	let LEAPING_CANCEL = true;
	if (("LEAPING_CANCEL" in config)) {
		LEAPING_CANCEL = config.LEAPING_CANCEL;
	}
	if (!("LEAPING_CANCEL" in config)) {
		config.LEAPING_CANCEL = true;
		config.LEAPING_CANCEL_DESCRIPTION = "Auto block cancel leaping strike, requires robotjs.";
		settingUpdate();
	}

	let LETHAL_CANCEL = false;
	if (("LETHAL_CANCEL" in config)) {
		LETHAL_CANCEL = config.LETHAL_CANCEL;
	}
	if (!("LETHAL_CANCEL" in config)) {
		config.LETHAL_CANCEL = false;
		config.LETHAL_CANCEL_DESCRIPTION = "Auto block cancel lethal strike, requires robotjs. DOES NOT ACTIVATE IF CYCLONE IS STILL CHAINABLE.";
		settingUpdate();
	}

	let LETHAL_TS_TAP = true;

	let TS_KEY = "8";
	
	let AUTO_ATTACK_CANCEL = true;
	if (("AUTO_ATTACK_CANCEL" in config)) {
		AUTO_ATTACK_CANCEL = config.AUTO_ATTACK_CANCEL;
	}
	if (!("AUTO_ATTACK_CANCEL" in config)) {
		config.AUTO_ATTACK_CANCEL = true;
		config.AUTO_ATTACK_CANCEL_DESCRIPTION = "Auto block cancel auto attack, requires robotjs.";
		settingUpdate();
	}
	
	let AUTO_ATTACK_CANCEL_DELAY =100;
	if (("AUTO_ATTACK_CANCEL_DELAY" in config)) {
		AUTO_ATTACK_CANCEL_DELAY = config.AUTO_ATTACK_CANCEL_DELAY;
	}
	if (!("AUTO_ATTACK_CANCEL_DELAY" in config)) {
		config.AUTO_ATTACK_CANCEL_DELAY =100;
		config.AUTO_ATTACK_CANCEL_DELAY_DESCRIPTION = "Auto block cancel auto attack delay in milliseconds, scales with aspd";
		settingUpdate();
	}

	let TACKLE_CANCEL = true;
	if (("TACKLE_CANCEL" in config)) {
		TACKLE_CANCEL = config.TACKLE_CANCEL;
	}
	if (!("TACKLE_CANCEL" in config)) {
		config.TACKLE_CANCEL = true;
		config.TACKLE_CANCEL_DESCRIPTION = "Auto block cancel tackle, requires robotjs.";
		settingUpdate();
	}

	let PUNISHING_CANCEL = false;
	if (("PUNISHING_CANCEL" in config)) {
		PUNISHING_CANCEL = config.PUNISHING_CANCEL;
	}
	if (!("PUNISHING_CANCEL" in config)) {
		config.PUNISHING_CANCEL = false;
		config.PUNISHING_CANCEL_DESCRIPTION = "Auto block cancel punishing strike, requires robotjs.";
		settingUpdate();
	}

	let VAMP_CANCEL = true;
	if (("VAMP_CANCEL" in config)) {
		VAMP_CANCEL = config.VAMP_CANCEL;
	}
	if (!("VAMP_CANCEL" in config)) {
		config.VAMP_CANCEL = true;
		config.VAMP_CANCEL_DESCRIPTION = "Auto block cancel vamp blow, requires robotjs. DOES NOT ACTIVATE IF CYCLONE IS STILL CHAINABLE.";
		settingUpdate();
	}

	let VAMP_CANCEL_TIMING =400;
	if (("VAMP_CANCEL_TIMING" in config)) {
		VAMP_CANCEL_TIMING = config.VAMP_CANCEL_TIMING;
	}
	if (!("VAMP_CANCEL_TIMING" in config)) {
		config.VAMP_CANCEL_TIMING =400; //KEY=121748685285705
		config.VAMP_CANCEL_TIMING_DESCRIPTION = "Vamp block timing.";
		settingUpdate();
	}

	let OVERWHELM_CANCEL = false;
	if (("OVERWHELM_CANCEL" in config)) {
		OVERWHELM_CANCEL = config.OVERWHELM_CANCEL;
	}
	if (!("OVERWHELM_CANCEL" in config)) {
		config.OVERWHELM_CANCEL = false;
		config.OVERWHELM_CANCEL_DESCRIPTION = "Auto block cancel overwhelm, requires robotjs.";
		settingUpdate();
	}

	let ESMASH_ROLL_CANCEL = true;
	if (("ESMASH_ROLL_CANCEL" in config)) {
		ESMASH_ROLL_CANCEL = config.ESMASH_ROLL_CANCEL;
	}
	if (!("ESMASH_ROLL_CANCEL" in config)) {
		config.ESMASH_ROLL_CANCEL = true;
		config.ESMASH_ROLL_CANCEL_DESCRIPTION = "Auto block cancel evasive roll component of evasive smash, requires robotjs.";
		settingUpdate();
	}

	let ESMASH_CANCEL = true;
	if (("ESMASH_CANCEL" in config)) {
		ESMASH_CANCEL = config.ESMASH_CANCEL;
	}
	if (!("ESMASH_CANCEL" in config)) {
		config.ESMASH_CANCEL = true;
		config.ESMASH_CANCEL_DESCRIPTION = "Auto block cancel evasive smash, requires robotjs.";
		settingUpdate();
	}

	let ESMASH_CANCEL_TIMING =400;
	if (("ESMASH_CANCEL_TIMING" in config)) {
		ESMASH_CANCEL_TIMING = config.ESMASH_CANCEL_TIMING;
	}
	if (!("ESMASH_CANCEL_TIMING" in config)) {
		config.ESMASH_CANCEL_TIMING =400;
		config.ESMASH_CANCEL_TIMING_DESCRIPTION = "Evasive smash timing.";
		settingUpdate();
	}

	let DASH_CANCEL_RAZE = true;
	if (("DASH_CANCEL_RAZE" in config)) {
		DASH_CANCEL_RAZE = config.DASH_CANCEL_RAZE;
	}
	if (!("DASH_CANCEL_RAZE" in config)) {
		config.DASH_CANCEL_RAZE = true;
		config.DASH_CANCEL_RAZE_DESCRIPTION = "Auto raze cancel dash, requires robotjs.";
		settingUpdate();
	}

	let RAZE_KEY = "9";
	if (("RAZE_KEY" in config)) {
		RAZE_KEY = config.RAZE_KEY;
	}
	if (!("RAZE_KEY" in config)) {
		config.RAZE_KEY = "9";
		config.RAZE_KEY_DESCRIPTION = "Raze key, find keyboard syntax list here http://robotjs.io/docs/syntax.";
		settingUpdate();
	}

	let CYCLONE_DASH = true;

	let AUTO_LR_INTO_RAMPAGE = true;
	if (("AUTO_LR_INTO_RAMPAGE" in config)) {
		AUTO_LR_INTO_RAMPAGE = config.AUTO_LR_INTO_RAMPAGE;
	}
	if (!("AUTO_LR_INTO_RAMPAGE" in config)) {
		config.AUTO_LR_INTO_RAMPAGE = true;
		config.AUTO_LR_INTO_RAMPAGE_DESCRIPTION = "Auto transition into rampage after 9 dexter stacks.";
		settingUpdate();
	}

	let RAMPAGE_KEY = "1";
	if (("RAMPAGE_KEY" in config)) {
		RAMPAGE_KEY = config.RAMPAGE_KEY;
	}
	if (!("RAMPAGE_KEY" in config)) {
		config.RAMPAGE_KEY = "1";
		config.RAMPAGE_KEY_DESCRIPTION = "Rampage key, find keyboard syntax list here http://robotjs.io/docs/syntax.";
		settingUpdate();
	}

	let AUTO_RAMPAGE_INTO_BF = true;
	if (("AUTO_RAMPAGE_INTO_BF" in config)) {
		AUTO_RAMPAGE_INTO_BF = config.AUTO_RAMPAGE_INTO_BF;
	}
	if (!("AUTO_RAMPAGE_INTO_BF" in config)) {
		config.AUTO_RAMPAGE_INTO_BF = true;
		config.AUTO_RAMPAGE_INTO_BF_DESCRIPTION = "Auto transition from rampage into beast fury when dexter stacks are about to drop.";
		settingUpdate();
	}

	let BF_KEY = "2";
	if (("BF_KEY" in config)) {
		BF_KEY = config.BF_KEY;
	}
	if (!("BF_KEY" in config)) {
		config.BF_KEY = "2";
		config.BF_KEY_DESCRIPTION = "Beast Fury key, find keyboard syntax list here http://robotjs.io/docs/syntax.";
		settingUpdate();
	}

	let KEY_AFTER_BEAST_FURY = true;
	if (("KEY_AFTER_BEAST_FURY" in config)) {
		KEY_AFTER_BEAST_FURY = config.KEY_AFTER_BEAST_FURY;
	}
	if (!("KEY_AFTER_BEAST_FURY" in config)) {
		config.KEY_AFTER_BEAST_FURY = true;
		config.KEY_AFTER_BEAST_FURY_DESCRIPTION = "Immediately attempt to use X after beast fury.";
		settingUpdate();
	}

	let KEY_AFTER_BEAST_FURY_DELAY =2500;
	if (("KEY_AFTER_BEAST_FURY_DELAY" in config)) {
		KEY_AFTER_BEAST_FURY_DELAY = config.KEY_AFTER_BEAST_FURY_DELAY;
	}
	if (!("KEY_AFTER_BEAST_FURY_DELAY" in config)) {
		config.KEY_AFTER_BEAST_FURY_DELAY =2500;
		config.KEY_AFTER_BEAST_FURY_DELAY_DESCRIPTION = "Delay between beast fury and X start.";
		settingUpdate();
	}

	let KEY_X = "5";
	if (("KEY_X" in config)) {
		KEY_X = config.KEY_X;
	}
	if (!("KEY_X" in config)) {
		config.KEY_X = "5";
		config.KEY_X_DESCRIPTION = "The key of the skill you want to use after beast fury (should be dexter), find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let KR_TALENT = false;

	let cid;
	let job;
	let model;
	let enabled = false;
	let aspd;

	let atkid = [];
	let atkid_base = 0xFEFEFFEE;

	let xloc;
	let yloc;
	let zloc;
	let xloc_dist;
	let yloc_dist;

	let lastRoll =0;
	let lastVamp =0;
	let important =0;

	let thunderer;
	let leashy = false;

	let set2 = false;
	let lastLastSkill;

	let razeTimer;
	let staggerTimer;
	let flattenTimer;

	let blockGrant = false;
	let blockGrant2;

	let chargeSkillFix = [];
	let chargeSkillFix2;
	let chargeSkillIDx =0;

	let fakeset = false;
	let fakeset2;
	
	let vampcall2;
	let lastSkillDelay;

	let flurryactive =0;

	let cyclonecounter =0;
	let cyclonecounter11;

	let disabBlock = false;

	let canVampBlow = true;
	let canVampBlow2 = false;
	let canVampZ1;
	let canVampZ2;

	let LL1;
	let LL2;
	let RR1;
	let RR2;
	let RR3;

	let ve;
	let we;
	let xe;
	let ye;
	let ze;

	let Ignore1 = false;
	let Ignore2;

	let specialattackspeed;

	let cycloneTimer = false;
	let cycloneTimer2;

	let godmode1 = false;
	let godmode2;

	let vampiricblow_active =0;
	let lethalstrike_active =0;
	let thunderstrike_active =0;
	let cyclone_active =0;
	let cyclone_hit_active =0;
	let block_active =0;

	let punchCounter =0;
	let clearPunchCounter;

	let chargeTimer;
	let msgSuppress;
	
	let lastspoof;

	let stallZerk =0;

	let leftchain =0;
	let leftspeed =1;
	let rightchain =0;
	let rightspeed =1;
	let onechain =0;
	let onespeed =1;

	let failsafe =0;

	let dashX;
	let dashY;
	let dashZ;

	let vampcan99 = false;
	let vampcan100;

	let one;
	let two;
	let three;
	let four;
	let five;

	let glyphState = [];
	let vampcall;

	let razeGlyph =0;
	let razeFalse;
	let mockGlyph =0;
	let mockFalse;

	let disabSkill = [];
	let startTime = [];
	let timer = [];
	let finishcheck = [];
	let finish = [];
	let vortexTimer;
	let charging = false;
	let blockActive =0;
	let backstabActive = false;

	let dstance = false;

	let cycloneEnded = false;

	let KR1z;
	let KR2z =0;

	let skill2dist;
	let zerkzerk = false;
	let zerkzerkfast = false;

	let lastSkill;
	let lastEvent =0;
	let lastCharge;
	let lastEventTime;
	let currentRe;
	let vortexActive = false;
	let GLOBAL_LOCK_DELAY =1000;

	let skill2chain = false;

	let backStepStart;

	let buffstacker =0;
	let bufftimer =0;
	let bufftimer2 =0;

	var atkArr;

	let axecounterspeed =1;
	let tsspeed =0;
	let flattenspeed =1;
	let leapingspeed =1;
	let talentState = [];
	dispatch.hook('S_LOAD_EP_INFO', 3, (event) => {
		if (!enabled) { return };
		talentState = [];
		event.perks.forEach(function (element) {
			talentState[element.id] = element.level;
		});
	});

	dispatch.hook('S_LEARN_EP_PERK', 1, (event) => {
		if (!enabled) { return };
		talentState = [];
		event.perks.forEach(function (element) {
			talentState[element.id] = element.level;
		});
	});

	dispatch.hook('S_LOAD_TOPO', 3, (event) => {
		if (event.zone ==118) {
			enabled = false;
		}
		else {
			enabled = [JOB_ZERK].includes(job);
		}
	});

	dispatch.hook('S_LOGIN', 14, (event) => {
		dstance = false;

		cid = event.gameId;
		model = event.templateId;

		job = (model -10101) %100;
		enabled = [JOB_ZERK].includes(job);

		if (DISABLE_VAMP_CHECK) {
			vampcan99 = true;
		}
	});

	dispatch.hook('C_CHAT', 1, (event) => {
		if (event.message.includes("disable3")) {
			enabled = false;
			console.log("Berserker script disabled");
			return false;
		}
		if (event.message.includes("enable3")) {
			enabled = [JOB_ZERK].includes(job);
			console.log("Berserker script enabled if you are currently logged into berserker");
			return false;
		}
		if (event.message.includes("lrtoggle")) {
			AUTO_LR_INTO_RAMPAGE = !AUTO_LR_INTO_RAMPAGE;
			console.log("Auto LR Rampage is: "+AUTO_LR_INTO_RAMPAGE);
			return false;
		}
	});

	function fakeEnd_zerk(event, duration) {
		finish[SKILL_CHARGING] = true;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		clearTimeout(finishcheck[event.skill.id]);
		finish[event.skill.id] = false;
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		var yyy =1;
		var yzz =0;
		if (event.skill.id == SKILL_TENACITY || event.skill.id == SKILL_BLOODLUST || event.skill.id == SKILL_DASH || event.skill.id == SKILL_UNCHAINED_ANGER || event.skill.id == SKILL_FIERY_RAGE || event.skill.id == SKILL_MOCKING_SHOUT || event.skill.id == SKILL_FEARSOME_SHOUT || event.skill.id == SKILL_TRIUMPHANT_SHOUT) {
			yyy = 1 / aspd;
		}
		if (event.skill.id == SKILL_ONE_EX && duration == SKILL_ONE_CHAIN_DURATION) {
			yzz = 30 + onechain;
		}
		if (event.skill.id == SKILL_ONE_EX) {
			yyy = onespeed;
		}
		if (event.skill.id == SKILL_UNBREAKABLE && leashy) {
			yzz =30;
			duration =1455;
		}
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: event.skill.id + yzz,
			stage: 0,
			speed: aspd * yyy,
			projectileSpeed: aspd * yyy,
			id: atkid[event.skill.id],
			effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
		});
		xloc = event.loc.x;
		yloc = event.loc.y;
		zloc = event.loc.z;
		
		if (event.skill.id == SKILL_DASH) {
			yyy =1;
		}

		finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / aspd), event);
		timer[event.skill.id] = setTimeout(
			function (event, yzz) {
				if (event.skill.id == SKILL_FIERY_RAGE || event.skill.id == SKILL_TENACITY || event.skill.id == SKILL_DASH || event.skill.id == SKILL_BLOODLUST) {
					event.loc.x = xloc;
					event.loc.y = yloc;
					event.loc.z = zloc;
				}
				if (lastSkill ==1) { return; }
				if (lastSkill != event.skill.id) { return; }
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id + yzz,
					type: 0,
					id: atkid[event.skill.id],
				});
			}, duration / (aspd * yyy), event, yzz);
	}

	function charge(event) {
		finish[SKILL_CHARGING] = true;
		dashX = false;
		dashY = false;
		dashZ = false;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		clearTimeout(finishcheck[event.skill.id]);
		finish[event.skill.id] = false;
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		setTimeout(function () {
			dispatch.toClient('S_ACTION_STAGE', 9, {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				stage: 0,
				speed: 1,
				projectileSpeed: 1,
				id: atkid[event.skill.id],
				effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
			});
			dispatch.toClient('S_INSTANT_DASH', 3, {
				gameId: cid,
				target: 0,
				loc: {
					x: event.dest.x,
					y: event.dest.y,
					z: event.dest.z
				},
				w: event.w,
			});
		},0);
		var zzzz = Math.pow((Math.pow((event.loc.x - event.dest.x),2) + Math.pow((event.loc.y - event.dest.y),2)), 0.5) / SKILL_CHARGING_DISTANCE * SKILL_CHARGING_DURATION +100;
		timer[event.skill.id] = setTimeout(function (event) {
			if (lastSkill == SKILL_CHARGING) {
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: {
						x: dashX || event.dest.x,
						y: dashY || event.dest.y,
						z: dashZ || event.dest.z
					},
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					type: 39,
					id: atkid[event.skill.id],
				});
				finish[event.skill.id] = true;
			}
		}, zzzz, event);
	}


	function force_end(event, unkz) {
		finish[SKILL_CHARGING] = true;
		if (lastEvent ==0) {
			return;
		}
		var newX =0;
		var newY =0;

		if (event.skill.id == SKILL_CYCLONE_3 || event.skill.id == SKILL_CYCLONE_4) {
			var angle = parseFloat(event.w);

			newX = Math.cos(angle) *200;
			newY = Math.sin(angle) *200;
		}
		if (event.skill.id == SKILL_CYCLONE || event.skill.id == SKILL_THUNDERSTRIKE) {
			unkz =0;
		}
		if (event.skill.id == SKILL_EVASIVE_SMASH_HIT_INIT) {
			newX =0;
			newY =0;
			event.loc.x = xloc;
			event.loc.y = yloc;
			event.loc.z = zloc;
		}
		dispatch.toClient('S_ACTION_END', 5, {
			gameId: cid,
			loc: {
				x: event.loc.x + newX,
				y: event.loc.y + newY,
				z: event.loc.z
			},
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			type: unkz, //0x02
			id: atkid[event.skill.id],
		});
	}

	function fakeEnd_Cyclone(event, stage, xy, yy, zzx) {
		finish[SKILL_CHARGING] = true;
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: {
				x: xy,
				y: yy,
				z: zzx
			},
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			stage: stage,
			speed: aspd + flurryactive,
			projectileSpeed: specialattackspeed,
			id: atkid[event.skill.id],
			effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
		});
	}

	function fakeEnd_CycloneZ(event, stage, xy, yy) {
		finish[SKILL_CHARGING] = true;
		if (lastSkill ==1) { return; }
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: {
				x: xy,
				y: yy,
				z: event.loc.z + 2
			},
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			stage: stage,
			speed: 1,
			projectileSpeed: 1,
			id: atkid[event.skill.id],
			effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
		});
	}

	function fakeEnd_Cyclone2(event, stage, xy, yy, zzx) {
		finish[SKILL_CHARGING] = true;
		if (lastSkill ==1) { return; }
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: {
				x: xy,
				y: yy,
				z: zzx
			},
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			stage: stage,
			speed: 1,
			projectileSpeed: 1,
			id: atkid[event.skill.id],
			effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
		});
	}

	function fakeEnd_Glitch(event, stage, xy, yy) {
		finish[SKILL_CHARGING] = true;
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: {
				x: xy,
				y: yy,
				z: event.loc.z
			},
			w: event.w,
			templateId: model,
			skill: lastCharge,
			stage: stage,
			speed: 1,
			projectileSpeed: 1,
			id: atkid[lastCharge],
			effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
		});
	}

	function fakeEnd_CycloneSpin(event, skillx, dist, spinStage) {
		finish[SKILL_CHARGING] = true;
		finish[skillx] = false;

		var newX;
		var newY;
		var angle = parseFloat(event.w);

		newX = Math.cos(angle) * dist;
		newY = Math.sin(angle) * dist;

		atkid[skillx] = atkid_base;
		atkid_base--;
		var yyy =1;
		if (event.skill.id == SKILL_TENACITY || event.skill.id == SKILL_BLOODLUST || event.skill.id == SKILL_DASH || event.skill.id == SKILL_UNCHAINED_ANGER || event.skill.id == SKILL_FIERY_RAGE || event.skill.id == SKILL_MOCKING_SHOUT || event.skill.id == SKILL_FEARSOME_SHOUT || event.skill.id == SKILL_TRIUMPHANT_SHOUT) {
			yyy = 1 / aspd;
		}

		if (event.skill.id == L_CLICK_EX) {
			yyy = leftspeed;
		}

		if (event.skill.id == R_CLICK_EX) {
			yyy = rightspeed;
		}

		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: {
				x: event.loc.x + (newX * spinStage),
				y: event.loc.y + (newY * spinStage),
				z: event.loc.z + 2
			},
			w: event.w,
			templateId: model,
			skill: skillx,
			stage: spinStage,
			speed: aspd * yyy,
			projectileSpeed: aspd * yyy,
			id: atkid[skillx],
			effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
		});
	}

	function fakeEnd_CycloneEnd_dist(event, skillx, xy, yy) {
		finish[SKILL_CHARGING] = true;
		if (lastSkill ==1) { return; }
		dispatch.toClient('S_ACTION_END', 5, {
			gameId: cid,
			loc: {
				x: xy,
				y: yy,
				z: event.loc.z + 2
			},
			w: event.w,
			templateId: model,
			skill: skillx,
			type: 0,
			id: atkid[skillx],
		});
		finish[event.skill.id] = true;
	}

	function fakeEnd_CycloneEnd_dist2(event, skillx, xy, yy, zz) {
		finish[SKILL_CHARGING] = true;
		if (lastSkill ==1) { return; }
		dispatch.toClient('S_ACTION_END', 5, {
			gameId: cid,
			loc: {
				x: xy,
				y: yy,
				z: zz
			},
			w: event.w,
			templateId: model,
			skill: skillx,
			type: 0,
			id: atkid[skillx],
		});
	}

	function fakeEnd_CycloneEnd(event, skillx) {
		finish[SKILL_CHARGING] = true;
		finish[skillx] = true;
		if (lastSkill ==1) { return; }

		dispatch.toClient('S_ACTION_END', 5, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: skillx,
			type: 0,
			id: atkid[skillx],
		});
	}

	function fakeEnd_End2(event, skillx) {
		finish[SKILL_CHARGING] = true;
		finish[skillx] = true;
		if (lastSkill ==1) { return; }

		dispatch.toClient('S_ACTION_END', 5, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: skillx,
			type: 0,
			id: atkid[skillx],
		});
	}

	function esFunction(event, skillzzz) {
		finish[SKILL_CHARGING] = true;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		atkid[skillzzz] = atkid_base;
		atkid_base--;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
			w: event.w,
			templateId: model,
			skill: skillzzz,
			stage: 0,
			speed: aspd,
			projectileSpeed: aspd,
			id: atkid[skillzzz],
			effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
		});



		timer[skillzzz] = setTimeout(function (skillzzz) {
			if (lastSkill ==1) { return; }
			if (lastSkill != event.skill.id && lastSkill != SKILL_EVASIVE_SMASH_HIT_1 && lastSkill != SKILL_EVASIVE_SMASH_HIT_2 && lastSkill != SKILL_EVASIVE_SMASH_HIT_3 && lastSkill != SKILL_EVASIVE_SMASH_HIT_4 && lastSkill != SKILL_EVASIVE_SMASH_HIT_INIT) { return; }
			var dist = SKILL_EVASIVE_SMASH_HIT_DISTANCE /2;

			var newX;
			var newY;
			var angle = parseFloat(event.w);

			newX = Math.cos(angle) * dist;
			newY = Math.sin(angle) * dist;
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: {
					x: event.loc.x + newX,
					y: event.loc.y + newY,
					z: event.loc.z + 2
				},
				w: event.w,
				templateId: model,
				skill: skillzzz,
				type: 0,
				id: atkid[skillzzz],
			});
		}, SKILL_EVASIVE_SMASH_HIT_DURATION / aspd, skillzzz);
	}

	function fakeEnd_zerk_dist(event, duration, dist) {
		finish[SKILL_CHARGING] = true;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		clearTimeout(finishcheck[event.skill.id]);
		var zzz =0;
		var yyy =1;
		if (event.skill.id == SKILL_FLATTEN && (lastSkill == SKILL_PUNISHING_STRIKE_2 || lastSkill == SKILL_RAZE || lastSkill == SKILL_STAGGERING_STRIKE) && finish[lastSkill] == false) {
			zzz =30;
			duration = 2330; //2380;
		}
		if (event.skill.id == SKILL_RAZE && dstance && (lastSkill == SKILL_AXE_COUNTER || lastSkill == SKILL_PUNISHING_STRIKE_2 || lastSkill == SKILL_THUNDERSTRIKE_1 || lastSkill == SKILL_THUNDERSTRIKE_2 || lastSkill == SKILL_THUNDERSTRIKE_3 || lastSkill == SKILL_THUNDERSTRIKE_4 || lastSkill == SKILL_CYCLONE_1 || lastSkill == SKILL_CYCLONE_2 || lastSkill == SKILL_CYCLONE_3 || lastSkill == SKILL_CYCLONE_4 || lastSkill == S_P || lastSkill == S_P2 || lastSkill == S_P3 || lastSkill == S_P4 || lastSkill == SKILL_VAMPIRIC_BLOW_1 || lastSkill == SKILL_VAMPIRIC_BLOW_2 || lastSkill == SKILL_VAMPIRIC_BLOW_3 || lastSkill == SKILL_VAMPIRIC_BLOW_4 || lastSkill == SKILL_VAMPIRIC_BLOW_CHAIN) && finish[lastSkill] == false) {
			zzz =31;
			duration = 960; //665;
		}
		if (event.skill.id == SKILL_RAZE && !dstance && (lastSkill == SKILL_THUNDERSTRIKE_1 || lastSkill == SKILL_THUNDERSTRIKE_2 || lastSkill == SKILL_THUNDERSTRIKE_3 || lastSkill == SKILL_THUNDERSTRIKE_4 || lastSkill == SKILL_CYCLONE_1 || lastSkill == SKILL_CYCLONE_2 || lastSkill == SKILL_CYCLONE_3 || lastSkill == SKILL_CYCLONE_4 || lastSkill == S_P || lastSkill == S_P2 || lastSkill == S_P3 || lastSkill == S_P4 || lastSkill == SKILL_VAMPIRIC_BLOW_1 || lastSkill == SKILL_VAMPIRIC_BLOW_2 || lastSkill == SKILL_VAMPIRIC_BLOW_3 || lastSkill == SKILL_VAMPIRIC_BLOW_4 || lastSkill == SKILL_VAMPIRIC_BLOW_CHAIN) && finish[lastSkill] == false) {
			zzz =30;
			duration = 960; //665;
		}
		if (event.skill.id == SKILL_FLATTEN && glyphState[24050] ==1) {
			yyy = 1.25;
			duration = duration / 1.25;
		}
		if (event.skill.id == SKILL_FLATTEN) {
			yyy = yyy + flattenspeed -1;
			duration = duration / yyy * (yyy + 1 - flattenspeed);
		}
		if (event.skill.id == SKILL_LEAPING_STRIKE) {
			yyy = yyy + leapingspeed -1;
			duration = duration / yyy * (yyy + 1 - leapingspeed);
		}
		if (event.skill.id == SKILL_RAZE && glyphState[24078] ==1) {
			yyy = 1.25;
			duration = duration / 1.25;
		}
		if ((event.skill.id == SKILL_THUNDERSTRIKE_1 || event.skill.id == SKILL_THUNDERSTRIKE_2 || event.skill.id == SKILL_THUNDERSTRIKE_3 || event.skill.id == SKILL_THUNDERSTRIKE_4) && razeGlyph ==1) {
			yyy = yyy * 1.25;
			duration = duration / 1.25;
		}
		if (finish[lastSkill] == false) {
			force_end(lastEvent,4);
			finish[lastSkill] = true;
		}
		clearTimeout(thunderer);
		disabSkill[SKILL_THUNDERSTRIKE] = true;
		thunderer = setTimeout(function () { disabSkill[SKILL_THUNDERSTRIKE] = false; }, duration / aspd);

		finish[event.skill.id] = false;
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		if (event.skill.id != SKILL_THUNDERSTRIKE_1 && event.skill.id != SKILL_THUNDERSTRIKE_2 && event.skill.id != SKILL_THUNDERSTRIKE_3 && event.skill.id != SKILL_THUNDERSTRIKE_4) {
			dispatch.toClient('S_ACTION_STAGE', 9, {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id + zzz,
				stage: 0,
				speed: aspd * yyy,
				projectileSpeed: aspd * yyy,
				id: atkid[event.skill.id],
				effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
			});
		}
		if (event.skill.id == SKILL_THUNDERSTRIKE_1 || event.skill.id == SKILL_THUNDERSTRIKE_2 || event.skill.id == SKILL_THUNDERSTRIKE_3 || event.skill.id == SKILL_THUNDERSTRIKE_4) {
			var yyu;
			if (DISABLE_CHARGE) {
				yyu =0;
			}
			if (!DISABLE_CHARGE) {
				yyu =0;
			}
			setTimeout(function (event) {
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id + zzz,
					stage: 0,
					speed: aspd * yyy,
					projectileSpeed: aspd * yyy,
					id: atkid[event.skill.id],
					effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
				});
			}, yyu, event);
		}

		var newX;
		var newY;
		var angle = parseFloat(event.w);

		var vvv =0;
		newX = Math.cos(angle) * dist;
		newY = Math.sin(angle) * dist;

		xloc = event.loc.x;
		yloc = event.loc.y;

		finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / aspd), event);
		timer[event.skill.id] = setTimeout(
			function (event) {
				if (lastSkill ==1) { return; }
				if (lastSkill != event.skill.id && event.skill.id != SKILL_EVASIVE_SMASH_ROLL && event.skill.id != SKILL_RAZE && event.skill.id != SKILL_RAZE_2) { return; }
				if (event.skill.id == SKILL_EVASIVE_SMASH_ROLL) {
					event.loc.x = xloc;
					event.loc.y = yloc;
				}
				if (event.skill.id == SKILL_LEAPING_STRIKE && event != lastEvent && lastSkill != SKILL_AXE_BLOCK && lastSkill != SKILL_AXE_BLOCK_2) { return; }
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: {
						x: event.loc.x + newX,
						y: event.loc.y + newY,
						z: event.loc.z + 2
					},
					w: event.w,
					templateId: model,
					skill: event.skill.id + zzz,
					type: 0,
					id: atkid[event.skill.id],
				});
			}, duration / aspd, event);
	}

	dispatch.hook('S_CREST_INFO', 2, (event) => {
		if (!enabled) { return };
		event.crests.forEach(function (element) {
			glyphState[element.id] = element.enable;
		});
	});

	function repeater(key, trigger) {
		if (lastSkill == trigger && failsafe <400) {
			failsafe++;
			var robot17 = require("robotjs");
			robot17.keyTap(key);
			setTimeout(function (key, trigger) { repeater(key, trigger); }, 10, key, trigger);
		}
	}

	function repeatermx(key) {
		if (set2 == false && failsafe <80) {
			failsafe++;
			var robot18 = require("robotjs");
			robot18.keyTap(key);
			setTimeout(function (key) { repeatermx(key); }, 50, key);
		}
	}

	dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
		if (!enabled) { return };
		if ((event.message == '@2059' || event.message == '@36') && msgSuppress == event.message) {
			return false;
		}
		msgSuppress = event.message;
	});

	dispatch.hook('S_ABNORMALITY_BEGIN', 5, (event) => {
		if (!enabled) { return };
		if (event.target !== cid) {
			return;
		}
		if (event.id > 88406200 && event.id <88406216) {
			flattenspeed = (event.id -88406201) * 0.015 + 1.04;
		}
		if (event.id > 88426100 && event.id <88426116) {
			leapingspeed = (event.id -88426101) * 0.015 + 1.04;
		}
		if (event.id ==88402101) {
			axecounterspeed = 1.3;
		}
		if (event.id ==88402102) {
			axecounterspeed = 1.35;
		}
		if (event.id ==88402103) {
			axecounterspeed = 1.4;
		}
		if (event.id ==88402104) {
			axecounterspeed = 1.45;
		}
		if (event.id ==88402105) {
			axecounterspeed = 1.5;
		}
		if (event.id ==88402106) {
			axecounterspeed = 1.55;
		}
		if (event.id ==88402107) {
			axecounterspeed = 1.6;
		}
		if (event.id ==88402108) {
			axecounterspeed = 1.65;
		}
		if (event.id ==88402109) {
			axecounterspeed = 1.7;
		}
		if (event.id ==88402110) {
			axecounterspeed = 1.75;
		}
		if (event.id ==401400) {
			dstance = true;
		}
		if (event.id ==401705) { //401730
			zerkzerk = true;
			zerkzerkfast = true;
		}
		if (event.id == 400711 || event.id == 400501 || event.id ==400508) {
			flurryactive = 0.4;
		}
		if (event.id == 400508 && talentState[840330]) {
			tsspeed = 0 + talentState[840330] * 0.00714 + 0.043;
		}
		if (event.id ==401717) {
			leftchain =1;
		}
		if (event.id ==401716) {
			rightchain =1;
		}
		if (event.id ==401718) {
			onechain =1;
		}
		/*if(event.id ==401707){
		leftspeed = 1.8;
		}
		if(event.id ==401706){
		rightspeed = 1.8;
		}
		if(event.id ==401708){
		onespeed = 1.8;
		}
		*/
		if (event.id ==401706) {
			leftspeed = ((aspd *90) +1) /90;
			rightspeed = ((aspd *90) +1) /90;
			if (SLOW_SIN_DEX) {
				leftspeed = ((aspd *90) +1) / 90 / aspd;
				rightspeed = ((aspd *90) +1) / 90 / aspd;
			}
			buffstacker =1;
		}
		if (event.id ==401705) {
			leashy = true;
		}
	});

	dispatch.hook('S_ABNORMALITY_REFRESH', 1, (event) => {
		if (!enabled) { return };
		if (event.target !== cid) {
			return;
		}
		if (event.id ==401706) {
			leftspeed = ((aspd *90) + event.stacks) /90;
			rightspeed = ((aspd *90) + event.stacks) /90;
			if (SLOW_SIN_DEX) {
				leftspeed = ((aspd *90) + event.stacks) / 90 / aspd;
				rightspeed = ((aspd *90) + event.stacks) / 90 / aspd;
			}
			buffstacker = event.stacks;
		}
		if (event.id ==401709) {

		}
	});

	dispatch.hook('S_ABNORMALITY_END', 1, (event) => {
		if (!enabled) { return };
		if (event.target !== cid) {
			return;
		}
		if (event.id > 88406200 && event.id <88406216) {
			flattenspeed =1;
		}
		if (event.id > 88426100 && event.id <88426116) {
			leapingspeed =1;
		}
		if (event.id ==88402101) {
			axecounterspeed =1;
		}
		if (event.id ==88402102) {
			axecounterspeed =1;
		}
		if (event.id ==88402103) {
			axecounterspeed =1;
		}
		if (event.id ==88402104) {
			axecounterspeed =1;
		}
		if (event.id ==88402105) {
			axecounterspeed =1;
		}
		if (event.id ==88402106) {
			axecounterspeed =1;
		}
		if (event.id ==88402107) {
			axecounterspeed =1;
		}
		if (event.id ==88402108) {
			axecounterspeed =1;
		}
		if (event.id ==88402109) {
			axecounterspeed =1;
		}
		if (event.id ==88402110) {
			axecounterspeed =1;
		}
		if (event.id ==401400) {
			dstance = false;
		}
		if (event.id ==401705) { //401730
			setTimeout(function () {
				zerkzerk = false;
			},0);
			zerkzerkfast = false;
		}
		if (event.id == 400711 || event.id == 400501 || event.id ==400508) {
			flurryactive =0;
		}
		if (event.id ==400508) {
			tsspeed =0;
		}
		if (event.id ==401717) {
			leftchain =0;
		}
		if (event.id ==401716) {
			rightchain =0;
		}
		if (event.id ==401718) {
			onechain =0;
		}
		/*
		if(event.id ==401707){
		leftspeed = 1.8;
		}
		if(event.id ==401706){
		rightspeed = 1.8;
		}
		if(event.id ==401708){
		onespeed = 1.8;
		}
		*/
		if (event.id ==401706) {
			leftspeed =1;
			rightspeed =1;
			buffstacker =0;
		}
		if (event.id ==401705) {
			leashy = false;
		}
		if (event.id ==401709) {

		}
	});

	dispatch.hook('S_EACH_SKILL_RESULT', 15, (event) => {
		if (event.target === cid) {
			if (event.reaction.enable == true) {
				lastSkill =1;
				cyclone_active =0;
				thunderstrike_active =0;
				lethalstrike_active =0;
				vampiricblow_active =0;
			}
		}
	});

	dispatch.hook('S_CREST_APPLY', 2, (event) => {
		if (!enabled) { return };
		glyphState[event.id] = event.enable;
	});

	function grantskill(xskill) {
		if (!SPOOF_GRANT) {
			return;
		}
		clearTimeout(blockGrant2);
		blockGrant = true;
		blockGrant2 = setTimeout(function () { blockGrant = false; },500);
		dispatch.toClient('S_GRANT_SKILL', 3, {
			skill: xskill,
		});
		lastspoof = xskill;
	}

	dispatch.hook('S_GRANT_SKILL', 3, (event) => {
		if (!enabled) { return };
		if (blockGrant && lastspoof == event.skill.id) {
			return false;
		}
	});

	function vampFunction(event) {
		if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW && canVampBlow == true) {
			thunderstrike_active =0;
			lethalstrike_active =0;
			cyclone_hit_active =0;
			if (event.skill.id == SKILL_VAMPIRIC_BLOW && (lastSkill == SKILL_THUNDERSTRIKE_4 || lastSkill == SKILL_CYCLONE_4 || lastSkill == SKILL_LETHAL_STRIKE_4) && finish[lastSkill] == false && canVampBlow2) {
				//force_end(lastEvent,4);
				clearTimeout(timer[lastSkill]);

				finish[lastSkill] = true;

				var vampSkill = SKILL_VAMPIRIC_BLOW_CHAIN;

				disabBlock = true;
				setTimeout(function () {
					disabBlock = false;
				},0);

				atkid[vampSkill] = atkid_base;
				atkid_base--;

				finish[SKILL_VAMPIRIC_BLOW_CHAIN] = false;
				clearTimeout(vampcan100);
				vampcan99 = false;

				clearTimeout(razeTimer);
				disabSkill[SKILL_RAZE] = false;
				clearTimeout(staggerTimer);
				disabSkill[SKILL_STAGGERING_STRIKE] = true;
				staggerTimer = setTimeout(function () { disabSkill[SKILL_STAGGERING_STRIKE] = false; }, SKILL_VAMPIRIC_BLOW_CAST / aspd);
				clearTimeout(flattenTimer);
				disabSkill[SKILL_FLATTEN] = true;
				flattenTimer = setTimeout(function () { disabSkill[SKILL_FLATTEN] = false; }, SKILL_VAMPIRIC_BLOW_CAST / aspd);

				//disabSkill[SKILL_CYCLONE] = true;
				//var timer5 = setTimeout(function() { disabSkill[SKILL_CYCLONE] = false; }, SKILL_VAMPIRIC_BLOW_CAST / aspd);

				var d = new Date();
				lastVamp = d.getTime();

				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: vampSkill,
					stage: 0,
					speed: aspd,
					projectileSpeed: aspd,
					id: atkid[vampSkill],
					effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
				});
				lastSkill = SKILL_VAMPIRIC_BLOW_CHAIN;
				lastEvent = event;

				if ((lastSkill == SKILL_VAMPIRIC_BLOW_CHAIN || lastSkill == SKILL_VAMPIRIC_BLOW) && VAMP_CANCEL && !godmode1) {
					setTimeout(function () {
						failsafe =0;
						repeater(BLOCK_KEY, SKILL_VAMPIRIC_BLOW_CHAIN);
						repeater(BLOCK_KEY, SKILL_VAMPIRIC_BLOW);
					}, VAMP_CANCEL_TIMING / aspd);
				}

				setTimeout(function (event, vampSkill) {
					finish[SKILL_VAMPIRIC_BLOW_CHAIN] = true;
					//if (finish[SKILL_VAMPIRIC_BLOW_CHAIN] == false && lastSkill == SKILL_VAMPIRIC_BLOW_CHAIN) {
					if (lastSkill == SKILL_VAMPIRIC_BLOW_CHAIN) {
						var dist = SKILL_VAMPIRIC_BLOW_DISTANCE;

						var newX;
						var newY;
						var angle = parseFloat(event.w);

						newX = Math.cos(angle) * dist;
						newY = Math.sin(angle) * dist;
						dispatch.toClient('S_ACTION_END', 5, {
							gameId: cid,
							loc: {
								x: event.loc.x + newX,
								y: event.loc.y + newY,
								z: event.loc.z + 2
							},
							w: event.w,
							templateId: model,
							skill: vampSkill,
							type: 0,
							id: atkid[vampSkill],
						});
					}
				}, SKILL_VAMPIRIC_BLOW_CAST / aspd, event, vampSkill);
			} else {
				if (DISABLE_CHARGE) { lastSkill = SKILL_VAMPIRIC_BLOW; return; }
				if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW && vampiricblow_active == 1 && canVampBlow == true) {
					specialattackspeed = (aspd + flurryactive);
					force_end(lastEvent,0);
					clearTimeout(timer[lastSkill]);
					fakeEnd_Cyclone(event, 0, event.loc.x, event.loc.y, event.loc.z);
					stallZerk =0;
					vampiricblow_active++;
					chargeTimer = setTimeout(function () {
						if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW && vampiricblow_active ==2) {
							fakeEnd_Cyclone(event, 1, xloc, yloc, zloc);
							vampiricblow_active++;
							chargeTimer = setTimeout(function () {
								if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW && vampiricblow_active ==3) {
									fakeEnd_Cyclone(event, 2, xloc, yloc, zloc);
									vampiricblow_active++;
									chargeTimer = setTimeout(function () {
										if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW && vampiricblow_active ==4) {
											vampiricblow_active++;
											fakeEnd_Cyclone(event, 3, xloc, yloc, zloc);
										}
									}, SKILL_VAMPIRIC_BLOW_DURATION / (aspd + flurryactive)); // setTimeout for 4th charge
								}
							}, SKILL_VAMPIRIC_BLOW_DURATION / (aspd + flurryactive)); // setTimeout for 3rd charge
						}
					}, SKILL_VAMPIRIC_BLOW_DURATION / (aspd + flurryactive)); // setTimeout for 2nd charge
				}
			}
		}
	}

	dispatch.hook('S_CREATURE_CHANGE_HP', 6, (event) => {
		if (!enabled) return;
		if (event.target !== cid) {
			return;
		}
		if (event.diff === -965n || event.diff === -1931n || event.diff === -1544n) {
			clearTimeout(vampcan100);
			vampcan99 = true;
			vampcan100 = setTimeout(function () { vampcan99 = false; },3000);
		}
		if (DISABLE_VAMP_CHECK) {
			clearTimeout(vampcan100);
			vampcan99 = true;
		}
	});

	dispatch.hook('C_PRESS_SKILL', 4, (event) => {
		if (!enabled) return;
		if (event.skill.id == SKILL_CHARGING_2 || event.skill.id == SKILL_AXE_BLOCK || event.skill.id == SKILL_AXE_BLOCK_2 || event.skill.id == SKILL_FLATTEN || event.skill.id == SKILL_RAZE || event.skill.id == SKILL_LETHAL_STRIKE || event.skill.id == SKILL_CYCLONE) {
			finish[SKILL_CHARGING] = true;
		}
		if (finish[SKILL_CHARGING] == false) {
			return false;
		}
		if (event.skill.id != SKILL_AXE_BLOCK && event.skill.id != SKILL_AXE_BLOCK_2 && event.skill.id != SKILL_CYCLONE && finish[SKILL_VAMPIRIC_BLOW_CHAIN] == false) { return false; }
		if (event.skill.id != SKILL_AXE_BLOCK && event.skill.id != SKILL_AXE_BLOCK_2 && event.skill.id != SKILL_VAMPIRIC_BLOW && vampiricblow_active ==1) { return false; }
		if ((event.skill.id == SKILL_CYCLONE || event.skill.id == SKILL_LETHAL_STRIKE) && dstance) { return false; }
		if ((lastSkill == S_P || lastSkill == S_P2 || lastSkill == S_P3 || lastSkill == S_P4) && finish[lastSkill] == false && event.skill.id != SKILL_AXE_BLOCK && event.skill.id != SKILL_AXE_BLOCK_2) {
			return false;
		}
		if ((event.skill.id == SKILL_AXE_BLOCK || event.skill.id == SKILL_AXE_BLOCK_2) && event.press == false && lastSkill == SKILL_MOCKING_SHOUT && finish[lastSkill] == false) { return; }
		if ((event.skill.id == SKILL_AXE_BLOCK || event.skill.id == SKILL_AXE_BLOCK_2) && event.press == false && block_active !=1) { return false; }
		if ((lastSkill == SKILL_THUNDERSTRIKE_4 || lastSkill == SKILL_CYCLONE_4) && vampcan99 == false && event.skill.id == SKILL_VAMPIRIC_BLOW && fakeset != true && finish[lastSkill] == false) {
			return false;
		}

		if (!(event.skill.id == SKILL_ONE_EX || event.skill.id == SKILL_TWO_EX || event.skill.id == L_CLICK_EX || event.skill.id == R_CLICK_EX || event.skill.id == SKILL_UNBREAKABLE) && zerkzerkfast) {
			return false;
		}
		if (canVampBlow2 == false && event.skill.id == SKILL_VAMPIRIC_BLOW && (lastSkill == SKILL_THUNDERSTRIKE_4 || lastSkill == SKILL_CYCLONE_1 || lastSkill == SKILL_CYCLONE_2 || lastSkill == SKILL_CYCLONE_3 || lastSkill == SKILL_CYCLONE_4 || lastSkill == SKILL_LETHAL_STRIKE_4) && finish[lastSkill] == false) {
			/*var d = new Date();
			setTimeout(function(event){
			if(canVampBlow2 && lastSkill == SKILL_THUNDERSTRIKE_4){
			dispatch.toServer('C_PRESS_SKILL', 4, event);
			vampFunction(event);
			}, (d.getTime() - vampcall2 +10), event);*/
			return false;
		}
		if (job == JOB_ZERK && event.skill.id != SKILL_AXE_BLOCK && event.skill.id != SKILL_AXE_BLOCK_2 && event.press == true) {
			setTimeout(function () { dispatch.toServer('C_PRESS_SKILL', 4, event); },50);
			setTimeout(function () { dispatch.toServer('C_PRESS_SKILL', 4, event); },100);
			setTimeout(function () { dispatch.toServer('C_PRESS_SKILL', 4, event); },150);
			if (event.skill.id != SKILL_CYCLONE) {
				setTimeout(function () { dispatch.toServer('C_PRESS_SKILL', 4, event); },200);
			}
			chargeSkillFix[chargeSkillIDx] = setInterval(function (event, nnn) {
				if (( /*(event.skill.id == SKILL_CYCLONE && (cycloneTimer == false || (important !=0))) ||*/ event.skill.id == SKILL_VAMPIRIC_BLOW || event.skill.id == SKILL_THUNDERSTRIKE || event.skill.id == SKILL_LETHAL_STRIKE) && lastSkill == event.skill.id && event.press == true && chargeSkillFix2 != lastSkill) {
					dispatch.toServer('C_PRESS_SKILL', 4, event);
				}
				if (chargeSkillFix2 == lastSkill) {
					clearInterval(chargeSkillFix[nnn]);
				}
				if (event.skill.id == SKILL_CYCLONE && cyclone_active ==0) {
					clearInterval(chargeSkillFix[nnn]);
				}
				if (event.skill.id == SKILL_CYCLONE && !(cycloneTimer == false || (important !=0))) {
					clearInterval(chargeSkillFix[nnn]);
				}
				if (event.skill.id == SKILL_VAMPIRIC_BLOW && vampiricblow_active ==0) {
					clearInterval(chargeSkillFix[nnn]);
				}
				if (event.skill.id == SKILL_LETHAL_STRIKE && lethalstrike_active ==0) {
					clearInterval(chargeSkillFix[nnn]);
				}
				if (event.skill.id == SKILL_THUNDERSTRIKE && thunderstrike_active ==0) {
					clearInterval(chargeSkillFix[nnn]);
				}
			}, 200, event, chargeSkillIDx);
		}
		chargeSkillIDx++;
		xloc = event.loc.x;
		yloc = event.loc.y;
		zloc = event.loc.z;

		if ((event.skill.id == SKILL_CYCLONE || event.skill.id == SKILL_THUNDERSTRIKE || event.skill.id == SKILL_LETHAL_STRIKE || event.skill.id == SKILL_VAMPIRIC_BLOW) && (chargeSkillFix2 == event.skill.id + 10 || chargeSkillFix2 == event.skill.id + 11 || chargeSkillFix2 == event.skill.id + 12 || chargeSkillFix2 == event.skill.id +13) && event.press == false) {
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
				templateId: model,
				skill: event.skill.id,
				type: 0,
				id: atkid[event.skill.id],
			});
		}

		if (job == JOB_ZERK && event.skill.id != S_P) {
			punchCounter =0;
		}

		if (event.skill.id == SKILL_CYCLONE && lastSkill == SKILL_CYCLONE && event.press == false) {
			grantskill((event.skill.id + 8 + cyclone_active));
		}
		if (event.skill.id == SKILL_THUNDERSTRIKE && lastSkill == SKILL_THUNDERSTRIKE && event.press == false) {
			grantskill((event.skill.id + 8 + thunderstrike_active));
		}
		if (event.skill.id == SKILL_LETHAL_STRIKE && lastSkill == SKILL_LETHAL_STRIKE && event.press == false) {
			grantskill((event.skill.id + 8 + lethalstrike_active));
		}
		if (event.skill.id == SKILL_VAMPIRIC_BLOW && lastSkill == SKILL_VAMPIRIC_BLOW && event.press == false) {
			grantskill((event.skill.id + 8 + vampiricblow_active));
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_AXE_BLOCK || event.skill.id == SKILL_AXE_BLOCK_2)) {
			block_active = event.press;
		}
		if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW) {
			vampiricblow_active = event.press;
		}
		if (job == JOB_ZERK && event.skill.id == SKILL_LETHAL_STRIKE && lastSkill != SKILL_VAMPIRIC_BLOW) {
			lethalstrike_active = event.press;
		}
		if (job == JOB_ZERK && event.skill.id == SKILL_CYCLONE) {
			cyclone_active = event.press;
		}
		if (job == JOB_ZERK && event.skill.id == SKILL_THUNDERSTRIKE) {
			thunderstrike_active = event.press;
		}
		if (job == JOB_ZERK && (event.skill.id == SKILL_AXE_BLOCK || event.skill.id == SKILL_AXE_BLOCK_2) && event.press == false) {
			setTimeout(function (event) {
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					type: 10,
					id: atkid[event.skill.id],
				});
			}, 0, event);
		}
		if (job == JOB_ZERK && (event.skill.id == SKILL_AXE_BLOCK || event.skill.id == SKILL_AXE_BLOCK_2) && event.press == true) {
			if (disabBlock == true) {
				return false;
			}
			clearTimeout(thunderer);
			disabSkill[SKILL_CYCLONE] = false;
			disabSkill[SKILL_THUNDERSTRIKE] = false;
			disabSkill[SKILL_STAGGERING_STRIKE] = false;
			disabSkill[SKILL_FLATTEN] = false;
			disabSkill[SKILL_RAZE] = false;
			finish[SKILL_CHARGING] = true;
			clearTimeout(razeTimer);
			clearTimeout(staggerTimer);
			clearTimeout(flattenTimer);
			vampiricblow_active =0;
			lethalstrike_active =0;
			thunderstrike_active =0;
			cyclone_active =0;
			cyclone_hit_active =0;
			if (event.skill.id != SKILL_EVASIVE_ROLL && event.skill.id != SKILL_EVASIVE_SMASH_ROLL && lastSkill != SKILL_CHARGING) {
				force_end(lastEvent,6);
			}
			clearTimeout(timer[lastSkill]);
			if (finish[SKILL_PUNISHING_STRIKE] == false) {
				setTimeout(function (event) {
					if (finish[SKILL_PUNISHING_STRIKE_2] != false && block_active ==1) {
						atkid[event.skill.id] = atkid_base;
						atkid_base--;
						dispatch.toClient('S_ACTION_STAGE', 9, {
							gameId: cid,
							loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
							w: event.w,
							templateId: model,
							skill: event.skill.id,
							stage: 0,
							speed: 1,
							projectileSpeed: 1,
							id: atkid[event.skill.id],
							effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
						});
					}
				}, 100, event);
			}
			else {
				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				finish[SKILL_VAMPIRIC_BLOW_CHAIN] = true;
				setTimeout(function (event) {
					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						stage: 0,
						speed: 1,
						projectileSpeed: 1,
						id: atkid[event.skill.id],
						effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
					});
				}, 0, event);
			}
		}

		if (disabSkill[event.skill.id] == 'undefined') {
			disabSkill[event.skill.id] = false;
		}
		if (!disabSkill[event.skill.id]) {
			if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE || event.skill.id == SKILL_THUNDERSTRIKE || event.skill.id == SKILL_LETHAL_STRIKE || event.skill.id == SKILL_VAMPIRIC_BLOW) && event.press == false) {
				if (stallZerk >10) {
					console.log('attempt unstuck');
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: event.skill.id,
						type: 0,
						id: atkid[event.skill.id],
					});
				}
				if (lastSkill == SKILL_CYCLONE || lastSkill == SKILL_THUNDERSTRIKE || lastSkill == SKILL_LETHAL_STRIKE || lastSkill == SKILL_VAMPIRIC_BLOW) {
					stallZerk = stallZerk +1;
				}
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW && canVampBlow == true) {
				thunderstrike_active =0;
				lethalstrike_active =0;
				cyclone_hit_active =0;
				if (event.skill.id == SKILL_VAMPIRIC_BLOW && (lastSkill == SKILL_THUNDERSTRIKE_4 || lastSkill == SKILL_CYCLONE_4 || lastSkill == SKILL_LETHAL_STRIKE_4) && finish[lastSkill] == false && canVampBlow2) {
					//force_end(lastEvent,4);
					clearTimeout(timer[lastSkill]);

					finish[lastSkill] = true;

					var vampSkill = SKILL_VAMPIRIC_BLOW_CHAIN;

					disabBlock = true;
					setTimeout(function () {
						disabBlock = false;
					},0);

					atkid[vampSkill] = atkid_base;
					atkid_base--;


					finish[SKILL_VAMPIRIC_BLOW_CHAIN] = false;
					clearTimeout(vampcan100);
					vampcan99 = false;

					clearTimeout(razeTimer);
					disabSkill[SKILL_RAZE] = false;
					clearTimeout(staggerTimer);
					disabSkill[SKILL_STAGGERING_STRIKE] = true;
					staggerTimer = setTimeout(function () { disabSkill[SKILL_STAGGERING_STRIKE] = false; }, SKILL_VAMPIRIC_BLOW_CAST / aspd);
					clearTimeout(flattenTimer);
					disabSkill[SKILL_FLATTEN] = true;
					flattenTimer = setTimeout(function () { disabSkill[SKILL_FLATTEN] = false; }, SKILL_VAMPIRIC_BLOW_CAST / aspd);

					//disabSkill[SKILL_CYCLONE] = true;
					//var timer5 = setTimeout(function() { disabSkill[SKILL_CYCLONE] = false; }, SKILL_VAMPIRIC_BLOW_CAST / aspd);

					var d = new Date();
					lastVamp = d.getTime();

					dispatch.toClient('S_ACTION_STAGE', 9, {
						gameId: cid,
						loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
						w: event.w,
						templateId: model,
						skill: vampSkill,
						stage: 0,
						speed: aspd,
						projectileSpeed: aspd,
						id: atkid[vampSkill],
						effectScale: 1.0, moving: false, dest: { x: 0, y: 0, Z: 0 }, target: 0n, movement: [],
					});
					lastSkill = SKILL_VAMPIRIC_BLOW_CHAIN;
					lastEvent = event;

					if ((lastSkill == SKILL_VAMPIRIC_BLOW_CHAIN || lastSkill == SKILL_VAMPIRIC_BLOW) && VAMP_CANCEL && !godmode1) {
						setTimeout(function () {
							failsafe =0;
							repeater(BLOCK_KEY, SKILL_VAMPIRIC_BLOW_CHAIN);
							repeater(BLOCK_KEY, SKILL_VAMPIRIC_BLOW);
						}, VAMP_CANCEL_TIMING / aspd);
					}

					setTimeout(function (event, vampSkill) {
						finish[SKILL_VAMPIRIC_BLOW_CHAIN] = true;
						//if (finish[SKILL_VAMPIRIC_BLOW_CHAIN] == false && lastSkill == SKILL_VAMPIRIC_BLOW_CHAIN) {
						if (lastSkill == SKILL_VAMPIRIC_BLOW_CHAIN) {
							var dist = SKILL_VAMPIRIC_BLOW_DISTANCE;

							var newX;
							var newY;
							var angle = parseFloat(event.w);

							newX = Math.cos(angle) * dist;
							newY = Math.sin(angle) * dist;

							dispatch.toClient('S_ACTION_END', 5, {
								gameId: cid,
								loc: {
									x: event.loc.x + newX,
									y: event.loc.y + newY,
									z: event.loc.z + 2
								},
								w: event.w,
								templateId: model,
								skill: vampSkill,
								type: 0,
								id: atkid[vampSkill],
							});
						}
					}, SKILL_VAMPIRIC_BLOW_CAST / aspd, event, vampSkill);
				} else {
					if (DISABLE_CHARGE) { lastSkill = SKILL_VAMPIRIC_BLOW; return; }
					if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW && vampiricblow_active == 1 && canVampBlow == true) {
						specialattackspeed = (aspd + flurryactive);
						force_end(lastEvent,0);
						clearTimeout(timer[lastSkill]);
						fakeEnd_Cyclone(event, 0, event.loc.x, event.loc.y, event.loc.z);
						stallZerk =0;
						vampiricblow_active++;
						chargeTimer = setTimeout(function () {
							if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW && vampiricblow_active ==2) {
								fakeEnd_Cyclone(event, 1, xloc, yloc, zloc);
								vampiricblow_active++;
								chargeTimer = setTimeout(function () {
									if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW && vampiricblow_active ==3) {
										fakeEnd_Cyclone(event, 2, xloc, yloc, zloc);
										vampiricblow_active++;
										chargeTimer = setTimeout(function () {
											if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW && vampiricblow_active ==4) {
												vampiricblow_active++;
												fakeEnd_Cyclone(event, 3, xloc, yloc, zloc);
											}
										}, SKILL_VAMPIRIC_BLOW_DURATION / (aspd + flurryactive)); // setTimeout for 4th charge
									}
								}, SKILL_VAMPIRIC_BLOW_DURATION / (aspd + flurryactive)); // setTimeout for 3rd charge
							}
						}, SKILL_VAMPIRIC_BLOW_DURATION / (aspd + flurryactive)); // setTimeout for 2nd charge
					}
				}
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_EVASIVE_SMASH_HIT_INIT) {
				dispatch.toClient('S_ABNORMALITY_BEGIN', 5, {
					target: cid,
					source: cid,
					id: 400900,
					duration: 4000,
					unk: 0,
					stacks: 1,
					unk2: 0,
					unk3: 0,
				});
			}

			if (job == JOB_ZERK && !dstance && event.skill.id == SKILL_LETHAL_STRIKE && lethalstrike_active == 1 && finish[SKILL_VAMPIRIC_BLOW_CHAIN] != false) {
				force_end(lastEvent,0);
				clearTimeout(timer[lastSkill]);
				if (DISABLE_CHARGE) { lastSkill = SKILL_LETHAL_STRIKE; return; }
				fakeEnd_Cyclone(event, 0, event.loc.x, event.loc.y, event.loc.z);
				stallZerk =0;
				lethalstrike_active++;
				chargeTimer = setTimeout(function () {
					if (job == JOB_ZERK && event.skill.id == SKILL_LETHAL_STRIKE && lethalstrike_active ==2) {
						fakeEnd_Cyclone(event, 1, xloc, yloc, zloc);
						lethalstrike_active++;
						chargeTimer = setTimeout(function () {
							if (job == JOB_ZERK && event.skill.id == SKILL_LETHAL_STRIKE && lethalstrike_active ==3) {
								fakeEnd_Cyclone(event, 2, xloc, yloc, zloc);
								lethalstrike_active++;
								chargeTimer = setTimeout(function () {
									if (job == JOB_ZERK && event.skill.id == SKILL_LETHAL_STRIKE && lethalstrike_active ==4) {
										lethalstrike_active++;
										fakeEnd_Cyclone(event, 3, xloc, yloc, zloc);
									}
								}, SKILL_LETHAL_STRIKE_DURATION / (aspd + flurryactive)); // setTimeout for 4th charge
							}
						}, SKILL_LETHAL_STRIKE_DURATION / (aspd + flurryactive)); // setTimeout for 3rd charge
					}
				}, SKILL_LETHAL_STRIKE_DURATION / (aspd + flurryactive)); // setTimeout for 2nd charge
			}

			var TSGlyph = 1 + KR2z * 0.15;
			var CycloneGlyph =1;
			if (glyphState[24067] ==1) {
				TSGlyph = 1.25 + KR2z * 0.15;
			}
			if (glyphState[24096] ==1) {
				CycloneGlyph = 1.3;
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_THUNDERSTRIKE && thunderstrike_active ==1) {
				specialattackspeed = (1.1 * (aspd + flurryactive + TSGlyph -1));
				force_end(lastEvent,0);
				clearTimeout(timer[lastSkill]);
				if (DISABLE_CHARGE) { lastSkill = SKILL_THUNDERSTRIKE; return; }
				if (godmode1 && cyclonecounter < 3 && (1 ==2)) {
					stallZerk =0;
					thunderstrike_active =5;
					fakeEnd_Cyclone(event, 3, event.loc.x, event.loc.y, event.loc.z);
				}
				else {
					fakeEnd_Cyclone(event, 0, event.loc.x, event.loc.y, event.loc.z);
					stallZerk =0;
					thunderstrike_active++;
					chargeTimer = setTimeout(function () {
						if (job == JOB_ZERK && event.skill.id == SKILL_THUNDERSTRIKE && thunderstrike_active ==2) {
							fakeEnd_Cyclone(event, 1, xloc, yloc, zloc);
							thunderstrike_active++;
							chargeTimer = setTimeout(function () {
								if (job == JOB_ZERK && event.skill.id == SKILL_THUNDERSTRIKE && thunderstrike_active ==3) {
									fakeEnd_Cyclone(event, 2, xloc, yloc, zloc);
									thunderstrike_active++;
									chargeTimer = setTimeout(function () {
										if (job == JOB_ZERK && event.skill.id == SKILL_THUNDERSTRIKE && thunderstrike_active ==4) {
											thunderstrike_active++;
											fakeEnd_Cyclone(event, 3, xloc, yloc, zloc);
										}
									}, SKILL_THUNDERSTRIKE_DURATION / (1.1 * (aspd + flurryactive + TSGlyph + tsspeed -1))); // setTimeout for 4th charge
								}
							}, SKILL_THUNDERSTRIKE_DURATION / (1.1 * (aspd + flurryactive + TSGlyph + tsspeed -1))); // setTimeout for 3rd charge
						}
					}, SKILL_THUNDERSTRIKE_DURATION / (1.1 * (aspd + flurryactive + TSGlyph + tsspeed -1))); // setTimeout for 2nd charge
				}
			}

			if (job == JOB_ZERK && !dstance && event.skill.id == SKILL_CYCLONE && cyclone_active ==1) {
				specialattackspeed = ((aspd + mockGlyph * 0.3 * aspd + flurryactive) + CycloneGlyph -1);
				var d = new Date();
				important =0;
				if ((d.getTime() - lastRoll) < (SKILL_EVASIVE_ROLL_DURATION / aspd)) {
					//important = ((SKILL_EVASIVE_ROLL_DURATION / aspd) - (d.getTime() - lastRoll));
				}
				if (((d.getTime() - lastVamp) < (VAMP_CANCEL_TIMING / aspd)) && important ==0) {
					//important = ((VAMP_CANCEL_TIMING / aspd) - (d.getTime() - lastVamp));
				}
				if (cyclone_active !=1) { return; }
				force_end(lastEvent,0);
				clearTimeout(timer[lastSkill]);
				if (DISABLE_CHARGE) { lastSkill = SKILL_CYCLONE; return; }
				if (/*lastCharge != SKILL_CYCLONE || */cycloneTimer == false || (important !=0)) {
					if (CYCLONE_DASH) {
						dispatch.toServer('C_START_SKILL', 7, {
							skill: SKILL_DASH,
							w: event.w,
							loc: {
								x: event.loc.x,
								y: event.loc.y,
								z: event.loc.z
							},
							dest: { x: 0, y: 0, z: 0 },
							unk: true,
							moving: false,
							continue: false,
							target: 0,
							unk2: 0,
						});
					}
					fakeEnd_Cyclone(event, 0, xloc, yloc, zloc);
					cyclone_active++;
					stallZerk =0;
					chargeTimer = setTimeout(function () {
						if (job == JOB_ZERK && event.skill.id == SKILL_CYCLONE && cyclone_active ==2) {
							fakeEnd_Cyclone(event, 1, xloc, yloc, zloc);
							cyclone_active++;
							chargeTimer = setTimeout(function () {
								if (job == JOB_ZERK && event.skill.id == SKILL_CYCLONE && cyclone_active ==3) {
									fakeEnd_Cyclone(event, 2, xloc, yloc, zloc);
									cyclone_active++;
									chargeTimer = setTimeout(function () {
										if (job == JOB_ZERK && event.skill.id == SKILL_CYCLONE && cyclone_active ==4) {
											cyclone_active++;
											fakeEnd_Cyclone(event, 3, xloc, yloc, zloc);
										}
									}, SKILL_CYCLONE_DURATION / ((aspd + mockGlyph * 0.3 * aspd + flurryactive) + CycloneGlyph -1)); // setTimeout for 4th charge
								}
							}, SKILL_CYCLONE_DURATION / ((aspd + mockGlyph * 0.3 * aspd + flurryactive) + CycloneGlyph -1)); // setTimeout for 3rd charge
						}
					}, SKILL_CYCLONE_DURATION / ((aspd + mockGlyph * 0.3 * aspd + flurryactive) + CycloneGlyph -1)); // setTimeout for 2nd charge
				}
				else {
					stallZerk =0;
					cyclone_active =5;
					fakeEnd_Cyclone(event, 3, event.loc.x, event.loc.y, event.loc.z);
					clearTimeout(fakeset2);
					fakeset = true;
					fakeset2 = setTimeout(function () {
						fakeset = false;
					},3000);
				}
			}
		}
		if (event.press == true) {
			lastSkill = event.skill.id;
			lastEvent = event;
			lastCharge = event.skill.id;
			clearTimeout(blockGrant2);
			blockGrant = false;
		}
	}); // end C_PRESS_SKILL

	dispatch.hook('C_START_TARGETED_SKILL', 7, (event) => {
		if (!enabled) return;
		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (!disabSkill[event.skill.id]) {
			lastSkillDelay =999999;
			setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },25);
			setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },50);
			setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },75);
			setTimeout(function () { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); },100);
			if (job == JOB_ZERK && event.skill.id != S_P) {
				punchCounter =0;
			}
			if (job == JOB_ZERK && event.skill.id == SKILL_CHARGING) {
				charge(event);
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_CHARGING] = false; }, GLOBAL_LOCK_DELAY);
			}

			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
		}
	});

	dispatch.hook('C_START_SKILL', 7, (event) => {
		if (!enabled) return;
		msgSuppress =0;
		/*if((event.skill.id == SKILL_THUNDERSTRIKE_1 || event.skill.id == SKILL_THUNDERSTRIKE_2 || event.skill.id == SKILL_THUNDERSTRIKE_3 || event.skill.id == SKILL_THUNDERSTRIKE_4) && thunderstrike_active != 0 && lastSkill == SKILL_THUNDERSTRIKE){
		return false;
		}
		if((event.skill.id == SKILL_CYCLONE_1 || event.skill.id == SKILL_CYCLONE_2 || event.skill.id == SKILL_CYCLONE_3 || event.skill.id == SKILL_CYCLONE_4) && cyclone_active != 0 && lastSkill == SKILL_CYCLONE){
		return false;
		}
		if((event.skill.id == SKILL_LETHAL_STRIKE_1 || event.skill.id == SKILL_LETHAL_STRIKE_2 || event.skill.id == SKILL_LETHAL_STRIKE_3 || event.skill.id == SKILL_LETHAL_STRIKE_4) && lethalstrike_active != 0 && lastSkill == SKILL_LETHAL_STRIKE){
		return false;
		}
		if((event.skill.id == SKILL_VAMPIRIC_BLOW_1 || event.skill.id == SKILL_VAMPIRIC_BLOW_2 || event.skill.id == SKILL_VAMPIRIC_BLOW_3 || event.skill.id == SKILL_VAMPIRIC_BLOW_4) && vampiricblow_active != 0 && lastSkill == SKILL_VAMPIRIC_BLOW){
		return false;
		}*/

		if ((event.skill.id == SKILL_ONE_EX || event.skill.id == SKILL_TWO_EX || event.skill.id == L_CLICK_EX || event.skill.id == R_CLICK_EX) && !zerkzerk) {
			return false;
		}

		if (!(event.skill.id == SKILL_ONE_EX || event.skill.id == SKILL_TWO_EX || event.skill.id == L_CLICK_EX || event.skill.id == R_CLICK_EX || event.skill.id == SKILL_UNBREAKABLE) && zerkzerkfast) {
			return false;
		}

		if ((event.skill.id == SKILL_ONE_EX || event.skill.id == L_CLICK_EX || event.skill.id == R_CLICK_EX) && finish[SKILL_UNBREAKABLE] == false) {
			return false;
		}

		if (job == JOB_ZERK && event.skill.id != S_P) {
			punchCounter =0;
		}

		if ((event.skill.id == SKILL_CYCLONE) && dstance) { return false; }

		if (event.skill.id == L_CLICK_EX && disabSkill[L_CLICK_EX]) {
			//return false;
		}
		if (event.skill.id == R_CLICK_EX && disabSkill[R_CLICK_EX]) {
			//return false;
		}
		if (event.skill.id == SKILL_TWO_EX && disabSkill[SKILL_TWO_EX]) {
			//return false;
		}
		if ((lastSkill == S_P || lastSkill == S_P2 || lastSkill == S_P3 || lastSkill == S_P4) && finish[lastSkill] == false && event.skill.id != SKILL_RAZE) {
			return false;
		}

		if (lastSkill == SKILL_VAMPIRIC_BLOW && finish[lastSkill] == false) {
			return false;
		}

		if (event.skill.id == SKILL_CHARGING_2 || event.skill.id == SKILL_AXE_BLOCK || event.skill.id == SKILL_AXE_BLOCK_2 || event.skill.id == SKILL_FLATTEN || event.skill.id == SKILL_RAZE || event.skill.id == SKILL_CYCLONE) {
			finish[SKILL_CHARGING] = true;
		}
		if (finish[SKILL_CHARGING] == false) {
			return false;
		}

		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (!disabSkill[event.skill.id]) {
			if (event.skill.id == SKILL_RAZE && finish[lastSkill] == false && lastSkill != SKILL_BLOODLUST && lastSkill != SKILL_DASH && lastSkill != SKILL_TENACITY && lastSkill != SKILL_CHARGING_2 && lastSkill != SKILL_VAMPIRIC_BLOW_1 && lastSkill != SKILL_VAMPIRIC_BLOW_2 && lastSkill != SKILL_VAMPIRIC_BLOW_3 && lastSkill != SKILL_VAMPIRIC_BLOW_4 && lastSkill != SKILL_VAMPIRIC_BLOW_CHAIN && lastSkill != SKILL_FEARSOME_SHOUT && lastSkill != SKILL_INESCAPABLE_DOOM && lastSkill != SKILL_THUNDERSTRIKE_1 && lastSkill != SKILL_THUNDERSTRIKE_2 && lastSkill != SKILL_THUNDERSTRIKE_3 && lastSkill != SKILL_THUNDERSTRIKE_4 && lastSkill != SKILL_CYCLONE_1 && lastSkill != SKILL_CYCLONE_2 && lastSkill != SKILL_CYCLONE_3 && lastSkill != SKILL_CYCLONE_4 && lastSkill != SKILL_PUNISHING_STRIKE_2 && lastSkill != SKILL_MOCKING_SHOUT && lastSkill != S_P && lastSkill != S_P2 && lastSkill != S_P3 && lastSkill != S_P4 && lastSkill != SKILL_LETHAL_STRIKE_1 && lastSkill != SKILL_LETHAL_STRIKE_2 && lastSkill != SKILL_LETHAL_STRIKE_3 && lastSkill != SKILL_LETHAL_STRIKE_4 && lastSkill != SKILL_LETHAL_STRIKE && lastSkill != (SKILL_LETHAL_STRIKE +30)) {
				return;
			}
			if (event.skill.id == SKILL_FLATTEN && finish[lastSkill] == false && lastSkill != SKILL_DASH && lastSkill != SKILL_CHARGING_2 && lastSkill != SKILL_TENACITY && lastSkill != SKILL_FEARSOME_SHOUT && lastSkill != SKILL_INESCAPABLE_DOOM && lastSkill != SKILL_PUNISHING_STRIKE_2 && lastSkill != SKILL_MOCKING_SHOUT && lastSkill != SKILL_RAZE && lastSkill != SKILL_STAGGERING_STRIKE) {
				return;
			}
			xloc = event.loc.x;
			yloc = event.loc.y;
			zloc = event.loc.z;
			if (event.skill.id == SKILL_PUNISHING_STRIKE || event.skill.id == SKILL_BERSERK_EX || event.skill.id == SKILL_FLATTEN || event.skill.id == SKILL_TACKLE /*|| event.skill.id == SKILL_STAGGERING_STRIKE*/ || event.skill.id == SKILL_TENACITY || event.skill.id == SKILL_BLOODLUST || event.skill.id == SKILL_DASH || event.skill.id == SKILL_UNCHAINED_ANGER || event.skill.id == SKILL_FIERY_RAGE || event.skill.id == SKILL_MOCKING_SHOUT || event.skill.id == SKILL_FEARSOME_SHOUT || event.skill.id == SKILL_TRIUMPHANT_SHOUT) {
				setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },25);
				setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },50);
				setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },75);
				if (event.skill.id == SKILL_TACKLE || event.skill.id == SKILL_FLATTEN) {
					setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },100);
					setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },125);
					setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },150);
					setTimeout(function () { dispatch.toServer('C_START_SKILL', 7, event); },200);
				}
			}

			if (job == JOB_ZERK && event.skill.id == S_P) {
				if (punchCounter ==0) {
					event.skill.id = S_P;
				}
				if (punchCounter ==1) {
					event.skill.id = S_P2;
				}
				if (punchCounter ==2) {
					event.skill.id = S_P3;
				}
				if (punchCounter ==3) {
					event.skill.id = S_P4;
				}
			}

			if (job == JOB_ZERK && event.skill.id == S_P) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P] = false; }, GLOBAL_LOCK_DELAY /10);
				fakeEnd_zerk_dist(event, S_P_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P_D);
			}

			if (job == JOB_ZERK && event.skill.id == S_P2) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P2] = false; }, GLOBAL_LOCK_DELAY /10);
				fakeEnd_zerk_dist(event, S_P2_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P2_D);
			}
			if (job == JOB_ZERK && event.skill.id == S_P3) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P3] = false; }, GLOBAL_LOCK_DELAY /10);
				fakeEnd_zerk_dist(event, S_P3_D);
				clearTimeout(clearPunchCounter);
				punchCounter++;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P3_D);
			}
			if (job == JOB_ZERK && event.skill.id == S_P4) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[S_P4] = false; }, GLOBAL_LOCK_DELAY /10);
				fakeEnd_zerk_dist(event, S_P4_D);
				clearTimeout(clearPunchCounter);
				punchCounter =0;
				clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P4_D);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_EVASIVE_SMASH_ROLL) {
				cyclone_active =0;
				thunderstrike_active =0;
				lethalstrike_active =0;
				vampiricblow_active =0;
				disabSkill[event.skill.id] = true;
				setTimeout(function () { disabSkill[SKILL_EVASIVE_SMASH_ROLL] = false; },200);
				fakeEnd_zerk_dist(event, SKILL_EVASIVE_SMASH_ROLL_DURATION, SKILL_EVASIVE_SMASH_ROLL_DISTANCE);
			}

			/*if (job == JOB_ZERK && event.skill.id == SKILL_AXE_COUNTER){
			fakeEnd_Glitch(event, 1, xloc, yloc);
			}*/

			if (job == JOB_ZERK && event.skill.id == SKILL_STAGGERING_STRIKE) {
				disabSkill[event.skill.id] = true;
				staggerTimer = setTimeout(function () { disabSkill[SKILL_STAGGERING_STRIKE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk_dist(event, SKILL_STAGGERING_STRIKE_DURATION, SKILL_STAGGERING_STRIKE_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_FLATTEN) {
				disabSkill[event.skill.id] = true;
				flattenTimer = setTimeout(function () { disabSkill[SKILL_FLATTEN] = false; }, SKILL_FLATTEN_DURATION / aspd);
				fakeEnd_zerk_dist(event, SKILL_FLATTEN_DURATION, SKILL_FLATTEN_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_LEAPING_STRIKE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_LEAPING_STRIKE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk_dist(event, SKILL_LEAPING_STRIKE_DURATION, SKILL_LEAPING_STRIKE_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_RAZE) {
				cyclone_hit_active =0;
				finish[SKILL_VAMPIRIC_BLOW_CHAIN] = true;
				clearTimeout(flattenTimer);
				disabSkill[SKILL_FLATTEN] = false;
				disabSkill[event.skill.id] = true;
				razeTimer = setTimeout(function () { disabSkill[SKILL_RAZE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk_dist(event, SKILL_RAZE_DURATION, SKILL_RAZE_DISTANCE);
				if (glyphState[24101] ==1) {
					clearTimeout(razeFalse);
					razeGlyph =1;
					razeFalse = setTimeout(function () { razeGlyph = 0; },5000);
				}
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_TACKLE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_TACKLE] = false; }, GLOBAL_LOCK_DELAY);
				disabSkill[SKILL_FLATTEN] = true;
				flattenTimer = setTimeout(function () { disabSkill[SKILL_FLATTEN] = false; }, SKILL_TACKLE_DURATION / aspd);
				clearTimeout(staggerTimer);
				disabSkill[SKILL_STAGGERING_STRIKE] = true;
				staggerTimer = setTimeout(function () { disabSkill[SKILL_STAGGERING_STRIKE] = false; }, (SKILL_TACKLE_DURATION +100) / aspd);
				fakeEnd_zerk_dist(event, SKILL_TACKLE_DURATION, SKILL_TACKLE_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_EVASIVE_ROLL) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_EVASIVE_ROLL] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk_dist(event, SKILL_EVASIVE_ROLL_DURATION, SKILL_EVASIVE_ROLL_DISTANCE);
				var d = new Date();
				lastRoll = d.getTime();
				cyclone_hit_active =0;
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_FIERY_RAGE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_FIERY_RAGE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk(event, SKILL_FIERY_RAGE_DURATION);
				if (KR_TALENT) {
					clearTimeout(KR1z);
					KR2z =1;
					KR1z = setTimeout(function () { KR2z = 0; },40000);
				}
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_RETALIATE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_RETALIATE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk(event, SKILL_RETALIATE_DURATION);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_CHARGING_2) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_CHARGING_2] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk(event, SKILL_CHARGING_2_DURATION);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_BLOODLUST) {
				//disabSkill[SKILL_CYCLONE] = true;
				//setTimeout(function() { disabSkill[SKILL_CYCLONE] = false; }, SKILL_BLOODLUST_DURATION);
				clearTimeout(thunderer);
				disabSkill[SKILL_THUNDERSTRIKE] = true;
				thunderer = setTimeout(function () { disabSkill[SKILL_THUNDERSTRIKE] = false; }, SKILL_BLOODLUST_DURATION);
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_BLOODLUST] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk(event, SKILL_BLOODLUST_DURATION);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_DASH) {
				//disabSkill[SKILL_CYCLONE] = true;
				//setTimeout(function() { disabSkill[SKILL_CYCLONE] = false; }, SKILL_DASH_DURATION);
				//clearTimeout(thunderer);
				//disabSkill[SKILL_THUNDERSTRIKE] = true;
				//thunderer = setTimeout(function () { disabSkill[SKILL_THUNDERSTRIKE] = false; }, SKILL_DASH_DURATION);
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_DASH] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk(event, SKILL_DASH_DURATION);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_UNBREAKABLE) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_UNBREAKABLE] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk(event, SKILL_UNBREAKABLE_DURATION);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_PUNISHING_STRIKE && dstance) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_PUNISHING_STRIKE] = false; }, GLOBAL_LOCK_DELAY *2);
				disabSkill[SKILL_RAZE] = true;
				razeTimer = setTimeout(function () { disabSkill[SKILL_RAZE] = false; }, SKILL_PUNISHING_STRIKE_DURATION / aspd);
				disabSkill[SKILL_FLATTEN] = true;
				flattenTimer = setTimeout(function () { disabSkill[SKILL_FLATTEN] = false; }, SKILL_PUNISHING_STRIKE_DURATION / aspd);
				fakeEnd_zerk(event, SKILL_PUNISHING_STRIKE_DURATION);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_PUNISHING_STRIKE_2) {
				disabSkill[event.skill.id] = true;
				disabSkill[SKILL_RAZE] = false;
				disabSkill[SKILL_FLATTEN] = false;
				var timer = setTimeout(function () { disabSkill[SKILL_PUNISHING_STRIKE_2] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk(event, SKILL_PUNISHING_STRIKE_2_DURATION);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_TRIUMPHANT_SHOUT) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function () { disabSkill[SKILL_TRIUMPHANT_SHOUT] = false; }, GLOBAL_LOCK_DELAY);
				fakeEnd_zerk(event, SKILL_TRIUMPHANT_SHOUT_DURATION);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_LETHAL_STRIKE) {
				cyclone_hit_active =0;
				finish[SKILL_VAMPIRIC_BLOW_CHAIN] = true;
				if ((lastSkill == SKILL_VAMPIRIC_BLOW_CHAIN || lastSkill == SKILL_VAMPIRIC_BLOW_1 || lastSkill == SKILL_VAMPIRIC_BLOW_2 || lastSkill == SKILL_VAMPIRIC_BLOW_3 || lastSkill == SKILL_VAMPIRIC_BLOW_4 || lastSkill == SKILL_LEAPING_STRIKE || lastSkill == SKILL_THUNDERSTRIKE_1 || lastSkill == SKILL_THUNDERSTRIKE_2 || lastSkill == SKILL_THUNDERSTRIKE_3 || lastSkill == SKILL_THUNDERSTRIKE_4 || lastSkill == SKILL_CYCLONE_1 || lastSkill == SKILL_CYCLONE_2 || lastSkill == SKILL_CYCLONE_3 || lastSkill == SKILL_CYCLONE_4) && finish[lastSkill] == false) {
					event.skill.id = event.skill.id +30;
					fakeEnd_zerk(event, SKILL_LETHAL_CHAIN_DURATION);
					disabSkill[SKILL_LETHAL_STRIKE] = true;
					var timer = setTimeout(function () { disabSkill[SKILL_LETHAL_STRIKE] = false; },100);
					clearTimeout(thunderer);
					disabSkill[SKILL_THUNDERSTRIKE] = false;
				}
				else if (finish[lastSkill] != false || lastSkill == SKILL_CHARGING || lastSkill == SKILL_DASH) {
					fakeEnd_zerk(event, SKILL_LETHAL_UNCHAIN_DURATION);
					disabSkill[SKILL_LETHAL_STRIKE] = true;
					var timer = setTimeout(function () { disabSkill[SKILL_LETHAL_STRIKE] = false; },100);
					clearTimeout(thunderer);
					disabSkill[SKILL_THUNDERSTRIKE] = false;
				}
				else {
					return false;
				}
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_UNCHAINED_ANGER) {
				disabSkill[SKILL_TENACITY] = true;
				setTimeout(function () { disabSkill[SKILL_TENACITY] = false; }, (SKILL_UNCHAINED_ANGER_DURATION_1 + SKILL_UNCHAINED_ANGER_DURATION_2) / aspd);
				fakeEnd_CycloneSpin(event, SKILL_UNCHAINED_ANGER, 0,0);
				setTimeout(function () {
					if (lastSkill != SKILL_UNCHAINED_ANGER) { return; }
					fakeEnd_CycloneSpin(event, SKILL_UNCHAINED_ANGER, 0,1);
				}, SKILL_UNCHAINED_ANGER_DURATION_1)
				setTimeout(function () {
					if (lastSkill != SKILL_UNCHAINED_ANGER) { return; }
					fakeEnd_CycloneEnd(event, SKILL_UNCHAINED_ANGER);
				}, (SKILL_UNCHAINED_ANGER_DURATION_1 + SKILL_UNCHAINED_ANGER_DURATION_2));
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_BERSERK_EX) {
				zerkzerkfast = true;
				setTimeout(function () { zerkzerkfast = false; }, ((SKILL_BERSERK_EX_STAGE0 + SKILL_BERSERK_EX_STAGE1 + SKILL_BERSERK_EX_STAGE2) / aspd));
				disabSkill[SKILL_BERSERK_EX] = true;
				setTimeout(function () { disabSkill[SKILL_BERSERK_EX] = false; }, (SKILL_BERSERK_EX_STAGE0 + SKILL_BERSERK_EX_STAGE1 + SKILL_BERSERK_EX_STAGE2) / aspd);
				fakeEnd_CycloneSpin(event, SKILL_BERSERK_EX, 0,0);
				setTimeout(function () {
					if (lastSkill != SKILL_BERSERK_EX) { return; }
					fakeEnd_CycloneSpin(event, SKILL_BERSERK_EX, 0,1);
				}, SKILL_BERSERK_EX_STAGE0 / aspd)
				setTimeout(function () {
					if (lastSkill != SKILL_BERSERK_EX) { return; }
					fakeEnd_CycloneSpin(event, SKILL_BERSERK_EX, 0,2);
				}, (SKILL_BERSERK_EX_STAGE0 + SKILL_BERSERK_EX_STAGE1) / aspd)
				setTimeout(function () {
					if (lastSkill != SKILL_BERSERK_EX) { return; }
					fakeEnd_CycloneEnd(event, SKILL_BERSERK_EX);
				}, (SKILL_BERSERK_EX_STAGE0 + SKILL_BERSERK_EX_STAGE1 + SKILL_BERSERK_EX_STAGE2) / aspd);
			}

			if (job == JOB_ZERK && event.skill.id == L_CLICK_EX) {
				clearTimeout(one);
				clearTimeout(two);
				clearTimeout(three);
				clearTimeout(four);
				clearTimeout(LL1);
				clearTimeout(LL2);
				clearTimeout(RR1);
				clearTimeout(RR2);
				clearTimeout(RR3);

				var d = new Date();
				bufftimer2 = d.getTime();

				if (lastSkill == R_CLICK_EX && disabSkill[R_CLICK_EX]) {
					one = setTimeout(function () { disabSkill[L_CLICK_EX] = false; }, (L_CLICK_CHAIN1 + L_CLICK_CHAIN2) / aspd / leftspeed);
					fakeEnd_CycloneSpin(event, (L_CLICK_EX + 30 + leftchain), 0,0);
					/*LL1 = setTimeout(function() {
					if(lastSkill != L_CLICK_EX){return;}
					fakeEnd_CycloneSpin(event, (L_CLICK_EX + 30 +leftchain), L_CLICK_EX_DISTANCE,1);
					}, L_CLICK_CHAIN1 / aspd / leftspeed)*/
					LL2 = setTimeout(function () {
						if (lastSkill != L_CLICK_EX) { return; }
						var newX;
						var newY;
						var angle = parseFloat(event.w);

						newX = Math.cos(angle) * L_CLICK_EX_DISTANCE;
						newY = Math.sin(angle) * L_CLICK_EX_DISTANCE;
						newX = event.loc.x + newX;
						newY = event.loc.y + newY;
						fakeEnd_CycloneEnd_dist(event, (L_CLICK_EX + 30 + +leftchain), newX, newY);
					}, (L_CLICK_CHAIN1 + L_CLICK_CHAIN2) / aspd / leftspeed);
				}
				else {
					one = setTimeout(function () { disabSkill[L_CLICK_EX] = false; }, (L_CLICK_EX_STAGE0 + L_CLICK_EX_STAGE1) / aspd / leftspeed);
					fakeEnd_CycloneSpin(event, L_CLICK_EX, 0,0);
					/*LL1 = setTimeout(function() {
					if(lastSkill != L_CLICK_EX){return;}
					fakeEnd_CycloneSpin(event, L_CLICK_EX, L_CLICK_EX_DISTANCE,1);
					}, L_CLICK_EX_STAGE0 / aspd / leftspeed)*/
					LL2 = setTimeout(function () {
						if (lastSkill != L_CLICK_EX) { return; }
						var newX;
						var newY;
						var angle = parseFloat(event.w);


						newX = Math.cos(angle) * L_CLICK_EX_DISTANCE;
						newY = Math.sin(angle) * L_CLICK_EX_DISTANCE;
						newX = event.loc.x + newX;
						newY = event.loc.y + newY;
						fakeEnd_CycloneEnd_dist(event, L_CLICK_EX, newX, newY);
					}, (L_CLICK_EX_STAGE0 + L_CLICK_EX_STAGE1) / aspd / leftspeed);
				}
				disabSkill[L_CLICK_EX] = false;
				disabSkill[R_CLICK_EX] = false;
				disabSkill[SKILL_ONE_EX] = false;
				disabSkill[SKILL_TWO_EX] = false;
				disabSkill[SKILL_BERSERK_EX] = false;

				disabSkill[L_CLICK_EX] = true;
				//disabSkill[SKILL_TWO_EX] = true;
			}

			if (job == JOB_ZERK && event.skill.id == R_CLICK_EX) {
				clearTimeout(one);
				clearTimeout(two);
				clearTimeout(three);
				clearTimeout(four);
				clearTimeout(LL1);
				clearTimeout(LL2);
				clearTimeout(RR1);
				clearTimeout(RR2);
				clearTimeout(RR3);

				buffstacker = buffstacker +1;
				var d = new Date();
				bufftimer = d.getTime();

				if (lastSkill == L_CLICK_EX && disabSkill[L_CLICK_EX]) {
					two = setTimeout(function () { disabSkill[R_CLICK_EX] = false; }, (R_CLICK_CHAIN1 + R_CLICK_CHAIN2) / aspd / rightspeed);
					fakeEnd_CycloneSpin(event, (R_CLICK_EX + 30 + rightchain), 0,0);
					/*RR1 = setTimeout(function() {
					if(lastSkill != R_CLICK_EX){return;}
					fakeEnd_CycloneSpin(event, (R_CLICK_EX + 30 + rightchain), 0,1);
					}, R_CLICK_CHAIN1 / aspd / rightspeed)*/
					RR2 = setTimeout(function () {
						if (lastSkill != R_CLICK_EX) { return; }
						fakeEnd_CycloneEnd(event, (R_CLICK_EX + 30 + rightchain));
					}, (R_CLICK_CHAIN1 + R_CLICK_CHAIN2) / aspd / rightspeed);
				}
				else if (lastSkill == SKILL_TWO_EX && disabSkill[SKILL_TWO_EX]) {
					two = setTimeout(function () { disabSkill[R_CLICK_EX] = false; }, (R_CLICK_CHAIN1 + R_CLICK_CHAIN2) / aspd / rightspeed);
					fakeEnd_CycloneSpin(event, (R_CLICK_EX + 30 + rightchain), 0,0);
					/*RR1 = setTimeout(function() {
					if(lastSkill != R_CLICK_EX){return;}
					fakeEnd_CycloneSpin(event, (R_CLICK_EX + 30 + rightchain), 0,1);
					}, R_CLICK_CHAIN1 / aspd / rightspeed)*/
					RR2 = setTimeout(function () {
						if (lastSkill != R_CLICK_EX) { return; }
						fakeEnd_CycloneEnd(event, (R_CLICK_EX + 30 + rightchain));
					}, (R_CLICK_CHAIN1 + R_CLICK_CHAIN2) / aspd / rightspeed);
				}
				else {
					two = setTimeout(function () { disabSkill[R_CLICK_EX] = false; }, (R_CLICK_EX_STAGE0 + R_CLICK_EX_STAGE1 + R_CLICK_EX_STAGE2) / aspd / rightspeed);
					fakeEnd_CycloneSpin(event, R_CLICK_EX, 0,0);
					/*RR1 = setTimeout(function() {
					if(lastSkill != R_CLICK_EX){return;}
					fakeEnd_CycloneSpin(event, R_CLICK_EX, 0,1);
					}, R_CLICK_EX_STAGE0 / aspd / rightspeed)
					RR2 = setTimeout(function() {
					if(lastSkill != R_CLICK_EX){return;}
					fakeEnd_CycloneSpin(event, R_CLICK_EX, 0,2);
					}, (R_CLICK_EX_STAGE0 + R_CLICK_EX_STAGE1) / aspd / rightspeed)*/
					RR3 = setTimeout(function () {
						if (lastSkill != R_CLICK_EX) { return; }
						fakeEnd_CycloneEnd(event, R_CLICK_EX);
					}, (R_CLICK_EX_STAGE0 + R_CLICK_EX_STAGE1 + R_CLICK_EX_STAGE2) / aspd / rightspeed);
				}

				disabSkill[L_CLICK_EX] = false;
				disabSkill[R_CLICK_EX] = false;
				disabSkill[SKILL_ONE_EX] = false;
				disabSkill[SKILL_TWO_EX] = false;
				disabSkill[SKILL_BERSERK_EX] = false;

				disabSkill[R_CLICK_EX] = true;
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_ONE_EX) {
				clearTimeout(one);
				clearTimeout(two);
				clearTimeout(three);
				clearTimeout(four);
				clearTimeout(LL1);
				clearTimeout(LL2);
				clearTimeout(RR1);
				clearTimeout(RR2);
				clearTimeout(RR3);
				if ((disabSkill[R_CLICK_EX] || disabSkill[L_CLICK_EX]) && (lastSkill == R_CLICK_EX || lastSkill == L_CLICK_EX)) {
					fakeEnd_zerk(event, SKILL_ONE_CHAIN_DURATION);
					one = setTimeout(function () { disabSkill[L_CLICK_EX] = false; }, SKILL_ONE_CHAIN_DURATION / aspd / onespeed);
					two = setTimeout(function () { disabSkill[R_CLICK_EX] = false; }, SKILL_ONE_CHAIN_DURATION / aspd / onespeed);
					clearTimeout(five);
					five = setTimeout(function () { disabSkill[6699] = false; }, SKILL_ONE_CHAIN_DURATION / aspd / onespeed);
				}
				else if ((disabSkill[6699]) && (lastSkill == SKILL_ONE_EX)) {
					fakeEnd_zerk(event, SKILL_ONE_CHAIN_DURATION);
					one = setTimeout(function () { disabSkill[L_CLICK_EX] = false; }, SKILL_ONE_CHAIN_DURATION / aspd / onespeed);
					two = setTimeout(function () { disabSkill[R_CLICK_EX] = false; }, SKILL_ONE_CHAIN_DURATION / aspd / onespeed);
					clearTimeout(five);
					five = setTimeout(function () { disabSkill[6699] = false; }, SKILL_ONE_CHAIN_DURATION / aspd / onespeed);
				}
				else {
					fakeEnd_zerk(event, SKILL_ONE_EX_DURATION);
					one = setTimeout(function () { disabSkill[L_CLICK_EX] = false; }, SKILL_ONE_EX_DURATION / aspd / onespeed);
					two = setTimeout(function () { disabSkill[R_CLICK_EX] = false; }, SKILL_ONE_EX_DURATION / aspd / onespeed);
					clearTimeout(five);
					five = setTimeout(function () { disabSkill[6699] = false; }, SKILL_ONE_EX_DURATION / aspd / onespeed);
				}
				disabSkill[L_CLICK_EX] = false;
				disabSkill[R_CLICK_EX] = false;
				disabSkill[SKILL_ONE_EX] = false;
				disabSkill[SKILL_TWO_EX] = false;
				disabSkill[SKILL_BERSERK_EX] = false;
				buffstacker =0;

				disabSkill[L_CLICK_EX] = true;
				disabSkill[R_CLICK_EX] = true;
				disabSkill[6699] = true;
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_TWO_EX) {
				clearTimeout(one);
				clearTimeout(two);
				clearTimeout(three);
				clearTimeout(four);
				clearTimeout(LL1);
				clearTimeout(LL2);
				clearTimeout(RR1);
				clearTimeout(RR2);
				clearTimeout(RR3);

				skill2chain =0;
				skill2dist = false;
				if ((disabSkill[SKILL_BERSERK_EX] || disabSkill[SKILL_ONE_EX] || disabSkill[R_CLICK_EX] || disabSkill[L_CLICK_EX]) && (lastSkill == SKILL_BERSERK_EX || lastSkill == R_CLICK_EX || lastSkill == L_CLICK_EX || lastSkill == SKILL_ONE_EX)) {
					skill2chain =30;
				}
				if (lastSkill == SKILL_UNBREAKABLE && finish[lastSkill] == false) {
					skill2chain =30;
				}
				disabSkill[L_CLICK_EX] = false;
				disabSkill[R_CLICK_EX] = false;
				disabSkill[SKILL_ONE_EX] = false;
				disabSkill[SKILL_TWO_EX] = false;
				disabSkill[SKILL_BERSERK_EX] = false;

				disabSkill[SKILL_TWO_EX] = true;
				disabSkill[L_CLICK_EX] = true;
				disabSkill[SKILL_ONE_EX] = false;
				four = setTimeout(function () { disabSkill[SKILL_TWO_EX] = false; }, (SKILL_TWO_EX_STAGE0 + SKILL_TWO_EX_STAGE1 + SKILL_TWO_EX_STAGE2 + SKILL_TWO_EX_STAGE3 + SKILL_TWO_EX_STAGE4) / aspd);
				one = setTimeout(function () { disabSkill[L_CLICK_EX] = false; }, (SKILL_TWO_EX_STAGE0 + SKILL_TWO_EX_STAGE1 + SKILL_TWO_EX_STAGE2 + SKILL_TWO_EX_STAGE3 + SKILL_TWO_EX_STAGE4) / aspd);
				three = setTimeout(function () { disabSkill[SKILL_ONE_EX] = false; }, (SKILL_TWO_EX_STAGE0 + SKILL_TWO_EX_STAGE1 + SKILL_TWO_EX_STAGE2 + SKILL_TWO_EX_STAGE3 + SKILL_TWO_EX_STAGE4) / aspd);
				fakeEnd_CycloneSpin(event, (SKILL_TWO_EX + skill2chain), 0,0);
				setTimeout(function () {
					if (lastSkill != SKILL_TWO_EX) { return; }
					if (!skill2dist) {
						fakeEnd_CycloneSpin(event, (SKILL_TWO_EX + skill2chain), 100,1);
					}
					if (skill2dist) {
						fakeEnd_CycloneSpin(event, (SKILL_TWO_EX + skill2chain), skill2dist,1);
					}
				}, SKILL_TWO_EX_STAGE0 / aspd);
				setTimeout(function () {
					if (lastSkill != SKILL_TWO_EX) { return; }
					if (!skill2dist) {
						fakeEnd_CycloneSpin(event, (SKILL_TWO_EX + skill2chain), 100,2);
					}
					if (skill2dist) {
						fakeEnd_CycloneSpin(event, (SKILL_TWO_EX + skill2chain), (skill2dist /2),2);
					}
				}, (SKILL_TWO_EX_STAGE0 + SKILL_TWO_EX_STAGE1) / aspd);
				setTimeout(function () {
					if (lastSkill != SKILL_TWO_EX) { return; }
					if (!skill2dist) {
						fakeEnd_CycloneSpin(event, (SKILL_TWO_EX + skill2chain), 100,3);
					}
					if (skill2dist) {
						fakeEnd_CycloneSpin(event, (SKILL_TWO_EX + skill2chain), (skill2dist /3),3);
					}
				}, (SKILL_TWO_EX_STAGE0 + SKILL_TWO_EX_STAGE1 + SKILL_TWO_EX_STAGE2) / aspd);
				setTimeout(function () {
					if (lastSkill != SKILL_TWO_EX) { return; }
					if (!skill2dist) {
						fakeEnd_CycloneSpin(event, (SKILL_TWO_EX + skill2chain), 100,4);
					}
					if (skill2dist) {
						fakeEnd_CycloneSpin(event, (SKILL_TWO_EX + skill2chain), (skill2dist /4),4);
					}
				}, (SKILL_TWO_EX_STAGE0 + SKILL_TWO_EX_STAGE1 + SKILL_TWO_EX_STAGE2 + SKILL_TWO_EX_STAGE3) / aspd);
				setTimeout(function () {
					if (lastSkill != SKILL_TWO_EX) { return; }
					var newX;
					var newY;
					var angle = parseFloat(event.w);

					newX = Math.cos(angle) *500;
					newY = Math.sin(angle) *500;
					if (skill2dist) {
						newX = Math.cos(angle) * skill2dist;
						newY = Math.sin(angle) * skill2dist;
					}
					newX = event.loc.x + newX;
					newY = event.loc.y + newY;
					fakeEnd_CycloneEnd_dist(event, (SKILL_TWO_EX + skill2chain), newX, newY);
				}, (SKILL_TWO_EX_STAGE0 + SKILL_TWO_EX_STAGE1 + SKILL_TWO_EX_STAGE2 + SKILL_TWO_EX_STAGE3 + SKILL_TWO_EX_STAGE4) / aspd);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_TENACITY) {
				//disabSkill[SKILL_CYCLONE] = true;
				xloc = event.loc.x;
				yloc = event.loc.y;
				zloc = event.loc.z;
				//setTimeout(function() { disabSkill[SKILL_CYCLONE] = false; }, (SKILL_TENACITY_DURATION_1 + SKILL_TENACITY_DURATION_2));
				clearTimeout(thunderer);
				disabSkill[SKILL_THUNDERSTRIKE] = true;
				thunderer = setTimeout(function () { disabSkill[SKILL_THUNDERSTRIKE] = false; }, (SKILL_TENACITY_DURATION_1 + SKILL_TENACITY_DURATION_2));
				fakeEnd_CycloneSpin(event, SKILL_TENACITY, 0,0);
				setTimeout(function () {
					fakeEnd_Cyclone2(event, 1, xloc, yloc, zloc);
				}, SKILL_TENACITY_DURATION_1)
				setTimeout(function () {
					fakeEnd_CycloneEnd_dist2(event, SKILL_TENACITY, xloc, yloc, zloc);
				}, (SKILL_TENACITY_DURATION_1 + SKILL_TENACITY_DURATION_2));
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_MOCKING_SHOUT) {
				fakeEnd_CycloneSpin(event, SKILL_MOCKING_SHOUT, 0,0);
				setTimeout(function () {
					if (lastSkill != SKILL_MOCKING_SHOUT) { return; }
					fakeEnd_CycloneZ(event, 1, xloc, yloc);
				}, SKILL_MOCKING_SHOUT_DURATION_1)
				setTimeout(function () {
					if (lastSkill != SKILL_MOCKING_SHOUT) { return; }
					fakeEnd_CycloneEnd_dist(event, SKILL_MOCKING_SHOUT, xloc, yloc);
				}, (SKILL_MOCKING_SHOUT_DURATION_1 + SKILL_MOCKING_SHOUT_DURATION_2));
				if (glyphState[24055] ==1) {
					clearTimeout(mockFalse);
					mockGlyph =1;
					mockFalse = setTimeout(function () { mockGlyph = 0; },6000);
				}
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_FEARSOME_SHOUT) {
				fakeEnd_CycloneSpin(event, SKILL_FEARSOME_SHOUT, 0,0);
				setTimeout(function () {
					if (lastSkill != SKILL_FEARSOME_SHOUT) { return; }
					fakeEnd_CycloneZ(event, 1, xloc, yloc);
				}, SKILL_FEARSOME_SHOUT_DURATION_1)
				setTimeout(function () {
					if (lastSkill != SKILL_FEARSOME_SHOUT) { return; }
					fakeEnd_CycloneEnd_dist(event, SKILL_FEARSOME_SHOUT, xloc, yloc);
				}, (SKILL_FEARSOME_SHOUT_DURATION_1 + SKILL_FEARSOME_SHOUT_DURATION_2));
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_EVASIVE_SMASH_HIT_1) {
				esFunction(event, SKILL_EVASIVE_SMASH_HIT_1);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_EVASIVE_SMASH_HIT_2) {
				esFunction(event, SKILL_EVASIVE_SMASH_HIT_2);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_EVASIVE_SMASH_HIT_3) {
				esFunction(event, SKILL_EVASIVE_SMASH_HIT_3);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_EVASIVE_SMASH_HIT_4) {
				esFunction(event, SKILL_EVASIVE_SMASH_HIT_4);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW_1) {
				fakeEnd_zerk_dist(event, SKILL_VAMPIRIC_BLOW_CAST, SKILL_VAMPIRIC_BLOW_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW_2) {
				fakeEnd_zerk_dist(event, SKILL_VAMPIRIC_BLOW_CAST, SKILL_VAMPIRIC_BLOW_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW_3) {
				fakeEnd_zerk_dist(event, SKILL_VAMPIRIC_BLOW_CAST, SKILL_VAMPIRIC_BLOW_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_VAMPIRIC_BLOW_4) {
				fakeEnd_zerk_dist(event, SKILL_VAMPIRIC_BLOW_CAST, SKILL_VAMPIRIC_BLOW_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_LETHAL_STRIKE_1 && finish[SKILL_VAMPIRIC_BLOW_CHAIN] != false) {
				fakeEnd_zerk_dist(event, SKILL_LETHAL_STRIKE_CAST, SKILL_LETHAL_STRIKE_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_LETHAL_STRIKE_2 && finish[SKILL_VAMPIRIC_BLOW_CHAIN] != false) {
				fakeEnd_zerk_dist(event, SKILL_LETHAL_STRIKE_CAST, SKILL_LETHAL_STRIKE_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_LETHAL_STRIKE_3 && finish[SKILL_VAMPIRIC_BLOW_CHAIN] != false) {
				fakeEnd_zerk_dist(event, SKILL_LETHAL_STRIKE_CAST, SKILL_LETHAL_STRIKE_DISTANCE);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_LETHAL_STRIKE_4 && finish[SKILL_VAMPIRIC_BLOW_CHAIN] != false) {
				fakeEnd_zerk_dist(event, SKILL_LETHAL_STRIKE_CAST, SKILL_LETHAL_STRIKE_DISTANCE);
				canVampBlow2 = false;
				clearTimeout(canVampZ1);
				clearTimeout(canVampZ2);
				canVampZ1 = setTimeout(function () { canVampBlow2 = true; }, 500 / aspd);
				canVampZ2 = setTimeout(function () { canVampBlow2 = false; }, SKILL_LETHAL_STRIKE_CAST / aspd);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_THUNDERSTRIKE_1 && finish[SKILL_VAMPIRIC_BLOW_CHAIN] != false) {
				//disabSkill[SKILL_CYCLONE] = true;
				//setTimeout(function() { disabSkill[SKILL_CYCLONE] = false; }, SKILL_THUNDERSTRIKE_CAST / aspd);
				//disabSkill[SKILL_RAZE] = true;
				//razeTimer = setTimeout(function() { disabSkill[SKILL_RAZE] = false; }, SKILL_THUNDERSTRIKE_CAST / aspd);
				fakeEnd_zerk_dist(event, SKILL_THUNDERSTRIKE_CAST, SKILL_THUNDERSTRIKE_DISTANCE);
				razeGlyph =0;
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_THUNDERSTRIKE_2 && finish[SKILL_VAMPIRIC_BLOW_CHAIN] != false) {
				//disabSkill[SKILL_CYCLONE] = true;
				//setTimeout(function() { disabSkill[SKILL_CYCLONE] = false; }, SKILL_THUNDERSTRIKE_CAST / aspd);
				//disabSkill[SKILL_RAZE] = true;
				//razeTimer = setTimeout(function() { disabSkill[SKILL_RAZE] = false; }, SKILL_THUNDERSTRIKE_CAST / aspd);
				fakeEnd_zerk_dist(event, SKILL_THUNDERSTRIKE_CAST, SKILL_THUNDERSTRIKE_DISTANCE);
				razeGlyph =0;
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_THUNDERSTRIKE_3 && finish[SKILL_VAMPIRIC_BLOW_CHAIN] != false) {
				//disabSkill[SKILL_CYCLONE] = true;
				//setTimeout(function() { disabSkill[SKILL_CYCLONE] = false; }, SKILL_THUNDERSTRIKE_CAST / aspd);
				//disabSkill[SKILL_RAZE] = true;
				//razeTimer = setTimeout(function() { disabSkill[SKILL_RAZE] = false; }, SKILL_THUNDERSTRIKE_CAST / aspd);
				fakeEnd_zerk_dist(event, SKILL_THUNDERSTRIKE_CAST, SKILL_THUNDERSTRIKE_DISTANCE);
				razeGlyph =0;
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_THUNDERSTRIKE_4 && finish[SKILL_VAMPIRIC_BLOW_CHAIN] != false) {
				//disabSkill[SKILL_CYCLONE] = true;
				//setTimeout(function() { disabSkill[SKILL_CYCLONE] = false; }, SKILL_THUNDERSTRIKE_CAST / aspd);
				//disabSkill[SKILL_RAZE] = true;
				//razeTimer = setTimeout(function() { disabSkill[SKILL_RAZE] = false; }, SKILL_THUNDERSTRIKE_CAST / aspd);
				fakeEnd_zerk_dist(event, SKILL_THUNDERSTRIKE_CAST, SKILL_THUNDERSTRIKE_DISTANCE);
				canVampBlow2 = false;
				clearTimeout(canVampZ1);
				clearTimeout(canVampZ2);
				canVampZ1 = setTimeout(function () { canVampBlow2 = true; }, 450 / (aspd + razeGlyph * aspd * 0.25));
				canVampZ2 = setTimeout(function () { canVampBlow2 = false; }, (SKILL_THUNDERSTRIKE_CAST / (aspd + razeGlyph * aspd * 0.25) +200));
				var d = new Date();
				razeGlyph =0;
				vampcall2 = d.getTime();
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_CYCLONE_1) {
				cyclone_hit_active =1;
				clearTimeout(thunderer);
				disabSkill[SKILL_THUNDERSTRIKE] = true;
				thunderer = setTimeout(function () { disabSkill[SKILL_THUNDERSTRIKE] = false; }, (SKILL_CYCLONE_SPIN +780) / aspd);
				//disabSkill[SKILL_RAZE] = true;
				//razeTimer = setTimeout(function() { disabSkill[SKILL_RAZE] = false; }, (SKILL_CYCLONE_SPIN +880) / aspd);
				disabSkill[SKILL_FLATTEN] = true;
				flattenTimer = setTimeout(function () { disabSkill[SKILL_FLATTEN] = false; }, (SKILL_CYCLONE_SPIN +880) / aspd);
				fakeEnd_CycloneSpin(event, SKILL_CYCLONE_1, SKILL_CYCLONE_DISTANCE,0);
				setTimeout(function () {
					if (cyclone_hit_active ==1) {
						fakeEnd_CycloneEnd(event, SKILL_CYCLONE_1);
					}
				}, (SKILL_CYCLONE_SPIN +780) / aspd);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_CYCLONE_2) {
				cyclone_hit_active =1;
				clearTimeout(thunderer);
				disabSkill[SKILL_THUNDERSTRIKE] = true;
				thunderer = setTimeout(function () { disabSkill[SKILL_THUNDERSTRIKE] = false; }, (SKILL_CYCLONE_SPIN * 3 +780) / aspd);
				//disabSkill[SKILL_RAZE] = true;
				//razeTimer = setTimeout(function() { disabSkill[SKILL_RAZE] = false; }, (SKILL_CYCLONE_SPIN * 3 +880) / aspd);
				disabSkill[SKILL_FLATTEN] = true;
				flattenTimer = setTimeout(function () { disabSkill[SKILL_FLATTEN] = false; }, (SKILL_CYCLONE_SPIN * 3 +880) / aspd);
				fakeEnd_CycloneSpin(event, SKILL_CYCLONE_2, SKILL_CYCLONE_DISTANCE,0);
				setTimeout(function () {
					if (cyclone_hit_active ==1) {
						if (cycloneEnded == true) { return; }
						fakeEnd_CycloneSpin(event, SKILL_CYCLONE_2, SKILL_CYCLONE_DISTANCE,1);
						cyclone_hit_active++;
					}
				}, SKILL_CYCLONE_SPIN / aspd);
				setTimeout(function () {
					if (cyclone_hit_active ==2) {
						if (cycloneEnded == true) { return; }
						fakeEnd_CycloneSpin(event, SKILL_CYCLONE_2, SKILL_CYCLONE_DISTANCE,2);
						cyclone_hit_active++;
					}
				}, (SKILL_CYCLONE_SPIN *2) / aspd);
				setTimeout(function () {
					if (cyclone_hit_active ==3) {
						fakeEnd_CycloneEnd(event, SKILL_CYCLONE_2);
					}
				}, (SKILL_CYCLONE_SPIN * 3 +780) / aspd);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_CYCLONE_3) {
				cyclone_hit_active =1;
				clearTimeout(thunderer);
				disabSkill[SKILL_THUNDERSTRIKE] = true;
				thunderer = setTimeout(function () { disabSkill[SKILL_THUNDERSTRIKE] = false; }, (SKILL_CYCLONE_SPIN * 4 +780) / aspd);
				//disabSkill[SKILL_RAZE] = true;
				//razeTimer = setTimeout(function() { disabSkill[SKILL_RAZE] = false; }, (SKILL_CYCLONE_SPIN * 4 +880) / aspd);
				disabSkill[SKILL_FLATTEN] = true;
				flattenTimer = setTimeout(function () { disabSkill[SKILL_FLATTEN] = false; }, (SKILL_CYCLONE_SPIN * 4 +880) / aspd);
				fakeEnd_CycloneSpin(event, SKILL_CYCLONE_3, SKILL_CYCLONE_DISTANCE,0);
				setTimeout(function () {
					if (cyclone_hit_active ==1) {
						if (cycloneEnded == true) { return; }
						fakeEnd_CycloneSpin(event, SKILL_CYCLONE_3, SKILL_CYCLONE_DISTANCE,1);
						cyclone_hit_active++;
					}
				}, SKILL_CYCLONE_SPIN / aspd);
				setTimeout(function () {
					if (cyclone_hit_active ==2) {
						if (cycloneEnded == true) { return; }
						fakeEnd_CycloneSpin(event, SKILL_CYCLONE_3, SKILL_CYCLONE_DISTANCE,2);
						cyclone_hit_active++;
					}
				}, (SKILL_CYCLONE_SPIN *2) / aspd);
				setTimeout(function () {
					if (cyclone_hit_active ==3) {
						if (cycloneEnded == true) { return; }
						fakeEnd_CycloneSpin(event, SKILL_CYCLONE_3, SKILL_CYCLONE_DISTANCE,3);
						cyclone_hit_active++;
					}
				}, (SKILL_CYCLONE_SPIN *3) / aspd);
				setTimeout(function () {
					if (cyclone_hit_active ==4) {
						if (cycloneEnded == true) { return; }
						fakeEnd_CycloneSpin(event, SKILL_CYCLONE_3, SKILL_CYCLONE_DISTANCE,4);
						cyclone_hit_active++;
					}
				}, (SKILL_CYCLONE_SPIN *4) / aspd);
				setTimeout(function () {
					if (cyclone_hit_active ==5) {
						fakeEnd_CycloneEnd(event, SKILL_CYCLONE_3);
					}
				}, (SKILL_CYCLONE_SPIN * 5 +780) / aspd);
			}

			if (job == JOB_ZERK && event.skill.id == SKILL_CYCLONE_4) {
				clearTimeout(canVampZ1);
				clearTimeout(canVampZ2);
				canVampBlow2 = false;
				cyclone_hit_active =1;
				clearTimeout(thunderer);
				disabSkill[SKILL_THUNDERSTRIKE] = true;
				thunderer = setTimeout(function () { disabSkill[SKILL_THUNDERSTRIKE] = false; }, (SKILL_CYCLONE_SPIN * 5 +780) / aspd);
				//disabSkill[SKILL_RAZE] = true;
				//razeTimer = setTimeout(function() { disabSkill[SKILL_RAZE] = false; }, (SKILL_CYCLONE_SPIN * 5 +880) / aspd);
				clearTimeout(flattenTimer);
				disabSkill[SKILL_FLATTEN] = true;
				flattenTimer = setTimeout(function () { disabSkill[SKILL_FLATTEN] = false; }, (SKILL_CYCLONE_SPIN * 5 +880) / aspd);
				fakeEnd_CycloneSpin(event, SKILL_CYCLONE_4, SKILL_CYCLONE_DISTANCE,0);
				clearTimeout(ve);
				clearTimeout(we);
				clearTimeout(xe);
				clearTimeout(ye);
				clearTimeout(ze);
				ve = setTimeout(function () {
					if (cyclone_hit_active ==1) {
						if (cycloneEnded == true) { return; }
						fakeEnd_CycloneSpin(event, SKILL_CYCLONE_4, SKILL_CYCLONE_DISTANCE,1);
						cyclone_hit_active =2;
						canVampBlow2 = false;
						clearTimeout(canVampZ1);
						clearTimeout(canVampZ2);
						canVampZ1 = setTimeout(function () { canVampBlow2 = true; }, 0 / aspd);
						canVampZ2 = setTimeout(function () { canVampBlow2 = false; }, (SKILL_CYCLONE_SPIN * 4 +780) / aspd);
					}
				}, SKILL_CYCLONE_SPIN / aspd);
				we = setTimeout(function () {
					if (cyclone_hit_active ==2) {
						if (cycloneEnded == true) { return; }
						fakeEnd_CycloneSpin(event, SKILL_CYCLONE_4, SKILL_CYCLONE_DISTANCE,2);
						cyclone_hit_active =3;
					}
				}, (SKILL_CYCLONE_SPIN *2) / aspd);
				xe = setTimeout(function () {
					if (cyclone_hit_active ==3) {
						if (cycloneEnded == true) { return; }
						fakeEnd_CycloneSpin(event, SKILL_CYCLONE_4, SKILL_CYCLONE_DISTANCE,3);
						cyclone_hit_active =4;
					}
				}, (SKILL_CYCLONE_SPIN *3) / aspd);
				ye = setTimeout(function () {
					if (cyclone_hit_active ==4) {
						if (cycloneEnded == true) { return; }
						fakeEnd_CycloneSpin(event, SKILL_CYCLONE_4, SKILL_CYCLONE_DISTANCE,4);
						cyclone_hit_active =5;
					}
				}, (SKILL_CYCLONE_SPIN *4) / aspd);
				ze = setTimeout(function () {
					if (cyclone_hit_active ==5) {
						fakeEnd_CycloneEnd(event, SKILL_CYCLONE_4);
					}
				}, (SKILL_CYCLONE_SPIN * 5 +780) / aspd);
			}
			lastSkill = event.skill.id;
			lastEvent = event;
			if (lastSkill == SKILL_FLATTEN && FLATTEN_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_FLATTEN);
				}, 200 / aspd);
			}
			if (lastSkill == SKILL_STAGGERING_STRIKE && STAGGERING_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_STAGGERING_STRIKE);
				}, 200 / aspd);
			}
			if (lastSkill == SKILL_LETHAL_STRIKE && LETHAL_CANCEL && !godmode1) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_LETHAL_STRIKE);
				}, 100 / aspd);
			}
			
			if (lastSkill == S_P && AUTO_ATTACK_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, S_P);
				}, AUTO_ATTACK_CANCEL_DELAY / aspd);
			}
			
			if (lastSkill == SKILL_TACKLE && TACKLE_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_TACKLE);
				}, 200 / aspd);
			}
			if (lastSkill == SKILL_LEAPING_STRIKE && LEAPING_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_LEAPING_STRIKE);
				}, 200 / aspd);
			}
			if (lastSkill == SKILL_PUNISHING_STRIKE && PUNISHING_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_PUNISHING_STRIKE);
				},10);
			}
			if (lastSkill == SKILL_PUNISHING_STRIKE_2 && PUNISHING_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_PUNISHING_STRIKE_2);
				},10);
			}
			if (lastSkill == SKILL_CHARGING_2 && OVERWHELM_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_CHARGING_2);
				},10);
			}
			if (lastSkill == SKILL_DASH && DASH_CANCEL_RAZE) {
				setTimeout(function () {
					failsafe =0;
					repeater(RAZE_KEY, SKILL_DASH);
				},10);
			}
			if (lastSkill == SKILL_EVASIVE_SMASH_ROLL && ESMASH_ROLL_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_EVASIVE_SMASH_ROLL);
				},10);
			}
			if (lastSkill == SKILL_EVASIVE_SMASH_HIT_1 && ESMASH_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_EVASIVE_SMASH_HIT_1);
				}, ESMASH_CANCEL_TIMING / aspd);
			}
			if (lastSkill == SKILL_EVASIVE_SMASH_HIT_2 && ESMASH_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_EVASIVE_SMASH_HIT_2);
				}, ESMASH_CANCEL_TIMING / aspd);
			}
			if (lastSkill == SKILL_EVASIVE_SMASH_HIT_3 && ESMASH_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_EVASIVE_SMASH_HIT_3);
				}, ESMASH_CANCEL_TIMING / aspd);
			}
			if (lastSkill == SKILL_EVASIVE_SMASH_HIT_4 && ESMASH_CANCEL) {
				setTimeout(function () {
					failsafe =0;
					repeater(BLOCK_KEY, SKILL_EVASIVE_SMASH_HIT_4);
				}, ESMASH_CANCEL_TIMING / aspd);
			}
			if (lastSkill == R_CLICK_EX && AUTO_LR_INTO_RAMPAGE && buffstacker >=7) {
				setTimeout(function () {
					failsafe =0;
					repeater(RAMPAGE_KEY, R_CLICK_EX);
					repeater(RAMPAGE_KEY, L_CLICK_EX);
				},7);
			}
			if (lastSkill == L_CLICK_EX && AUTO_LR_INTO_RAMPAGE && buffstacker >=7) {
				setTimeout(function () {
					failsafe =0;
					repeater(RAMPAGE_KEY, L_CLICK_EX);
					repeater(RAMPAGE_KEY, R_CLICK_EX);
				},7);
			}
			if (lastSkill == SKILL_ONE_EX && AUTO_RAMPAGE_INTO_BF) {
				var bufftimertrue = Math.min(bufftimer, bufftimer2);
				var d = new Date();
				if ((d.getTime() - bufftimertrue + (600 / (aspd * onespeed))) >=5000) {
					setTimeout(function () {
						failsafe =0;
						set2 = false;
						repeatermx(BF_KEY);
					},10);
				}
			}
			if (lastSkill == SKILL_TWO_EX && KEY_AFTER_BEAST_FURY) {
				setTimeout(function () {
					failsafe =0;
					repeater(KEY_X, SKILL_TWO_EX);
				}, KEY_AFTER_BEAST_FURY_DELAY / aspd);
			}
		}
	});

	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67115120);
		if (!enabled) return;

		if (event.gameId !== cid) {
			return;
		}
		var xzzy = event.skill.type ===1;
		if (!xzzy) {
			lastSkill =1;
			cyclone_active =0;
				thunderstrike_active =0;
				lethalstrike_active =0;
				vampiricblow_active =0;
		}
		chargeSkillFix2 = event.skill.id;
		if ((event.skill.id == SKILL_LETHAL_STRIKE || event.skill.id == SKILL_VAMPIRIC_BLOW || event.skill.id == SKILL_THUNDERSTRIKE) && event.stage ==3) {
			//canVampBlow2 = false;
		}

		var d = new Date();
		startTime[event.skill.id] = d.getTime();

		if (job == JOB_ZERK && ((event.skill.id == SKILL_AXE_BLOCK || event.skill.id == SKILL_AXE_BLOCK_2))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_STAGGERING_STRIKE || event.skill.id == SKILL_STAGGERING_STRIKE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == (SKILL_STAGGERING_STRIKE +30))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_FLATTEN || event.skill.id == SKILL_FLATTEN_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == (SKILL_FLATTEN +30) || event.skill.id == (SKILL_FLATTEN_2 +30))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LEAPING_STRIKE)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_RAZE || event.skill.id == SKILL_RAZE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == (SKILL_RAZE +30) || event.skill.id == (SKILL_RAZE_2 +30))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_TACKLE)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_EVASIVE_ROLL)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_UNCHAINED_ANGER)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_TENACITY)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_MOCKING_SHOUT)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_FEARSOME_SHOUT)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_EVASIVE_SMASH_ROLL)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_FIERY_RAGE)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_BLOODLUST)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_DASH)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_UNBREAKABLE || event.skill.id == (SKILL_UNBREAKABLE +30))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_PUNISHING_STRIKE || event.skill.id == SKILL_PUNISHING_STRIKE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_TRIUMPHANT_SHOUT)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW)) {
			if (DISABLE_CHARGE) { return; }
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW_CHAIN)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW_1)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_RETALIATE)) {
			if (Ignore1) {
				fakeEnd_zerk(event, SKILL_RETALIATE_DURATION);
				lastSkill = SKILL_RETALIATE;
			}
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW_3)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW_4)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LETHAL_STRIKE)) {
			//if (DISABLE_CHARGE) {return;}
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == (SKILL_LETHAL_STRIKE +30))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LETHAL_STRIKE_1)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LETHAL_STRIKE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LETHAL_STRIKE_3)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LETHAL_STRIKE_4)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_THUNDERSTRIKE)) {
			if (DISABLE_CHARGE) { return; }
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_THUNDERSTRIKE_1)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_THUNDERSTRIKE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_THUNDERSTRIKE_3)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_THUNDERSTRIKE_4)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_EVASIVE_SMASH_HIT_1 || event.skill.id == SKILL_EVASIVE_SMASH_HIT_2 || event.skill.id == SKILL_EVASIVE_SMASH_HIT_3 || event.skill.id == SKILL_EVASIVE_SMASH_HIT_4)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE)) {
			if (DISABLE_CHARGE) { return; }
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE_1)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE_3)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE_4)) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == SKILL_BERSERK_EX)) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == L_CLICK_EX || event.skill.id == (L_CLICK_EX +30) || event.skill.id == (L_CLICK_EX +31))) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == R_CLICK_EX || event.skill.id == (R_CLICK_EX +30) || event.skill.id == (R_CLICK_EX +31))) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == SKILL_ONE_EX || event.skill.id == (SKILL_ONE_EX +30) || event.skill.id == (SKILL_ONE_EX +31))) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == SKILL_TWO_EX || event.skill.id == (SKILL_TWO_EX +30) || event.skill.id == (SKILL_TWO_EX +31))) {
			set2 = true;
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3 || event.skill.id == S_P4)) {
			return false;
		}
	});

	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108496) console.log("error");
		if (!enabled) return;

		if (event.gameId !== cid) {
			return;
		}
		if ((event.skill.id == SKILL_CYCLONE_1 || event.skill.id == SKILL_CYCLONE_2 || event.skill.id == SKILL_CYCLONE_3 || event.skill.id == SKILL_CYCLONE_4) && (lastSkill == SKILL_CYCLONE_1 || lastSkill == SKILL_CYCLONE_2 || lastSkill == SKILL_CYCLONE_3 || lastSkill == SKILL_CYCLONE_4)) {
			//cycloneEnded = true;
			setTimeout(function () { cycloneEnded = false },3000);
		}

		if (event.skill.id == SKILL_LETHAL_STRIKE) {
			lethalstrike_active =0;
		}
		if (event.skill.id == SKILL_VAMPIRIC_BLOW) {
			vampiricblow_active =0;
		}
		if (event.skill.id == SKILL_CYCLONE) {
			//cyclone_active =0;
		}
		if (event.skill.id == SKILL_THUNDERSTRIKE) {
			thunderstrike_active =0;
		}

		var d = new Date();

		if (job == JOB_ZERK && ((event.skill.id == SKILL_AXE_BLOCK || event.skill.id == SKILL_AXE_BLOCK_2))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_STAGGERING_STRIKE || event.skill.id == SKILL_STAGGERING_STRIKE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == (SKILL_STAGGERING_STRIKE +30))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_FLATTEN || event.skill.id == SKILL_FLATTEN_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == (SKILL_FLATTEN +30) || event.skill.id == (SKILL_FLATTEN_2 +30))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LEAPING_STRIKE)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_RAZE || event.skill.id == SKILL_RAZE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == (SKILL_RAZE +30) || event.skill.id == (SKILL_RAZE_2 +30))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_TACKLE)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_RETALIATE)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_EVASIVE_ROLL)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_UNCHAINED_ANGER)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_TENACITY)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_MOCKING_SHOUT)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_FEARSOME_SHOUT)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_EVASIVE_SMASH_ROLL)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_FIERY_RAGE)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_BLOODLUST)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_PUNISHING_STRIKE || event.skill.id == SKILL_PUNISHING_STRIKE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_DASH)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_UNBREAKABLE || event.skill.id == (SKILL_UNBREAKABLE +30))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_TRIUMPHANT_SHOUT)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW)) {
			if (DISABLE_CHARGE) { return; }
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW_CHAIN)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW_1)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW_3)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_VAMPIRIC_BLOW_4)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LETHAL_STRIKE)) {
			//if (DISABLE_CHARGE) {return;}
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == (SKILL_LETHAL_STRIKE +30))) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LETHAL_STRIKE_1)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LETHAL_STRIKE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LETHAL_STRIKE_3)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_LETHAL_STRIKE_4)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_THUNDERSTRIKE)) {
			if (DISABLE_CHARGE) { return; }
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_THUNDERSTRIKE_1)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_THUNDERSTRIKE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_THUNDERSTRIKE_3)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_THUNDERSTRIKE_4)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_EVASIVE_SMASH_HIT_1 || event.skill.id == SKILL_EVASIVE_SMASH_HIT_2 || event.skill.id == SKILL_EVASIVE_SMASH_HIT_3 || event.skill.id == SKILL_EVASIVE_SMASH_HIT_4)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE)) {
			if (DISABLE_CHARGE) { return; }
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE_1)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE_2)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE_3)) {
			return false;
		}

		if (job == JOB_ZERK && (event.skill.id == SKILL_CYCLONE_4)) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == SKILL_BERSERK_EX)) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == L_CLICK_EX || event.skill.id == (L_CLICK_EX +30) || event.skill.id == (L_CLICK_EX +31))) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == R_CLICK_EX || event.skill.id == (R_CLICK_EX +30) || event.skill.id == (R_CLICK_EX +31))) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == SKILL_ONE_EX || event.skill.id == (SKILL_ONE_EX +30) || event.skill.id == (SKILL_ONE_EX +31))) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == SKILL_TWO_EX || event.skill.id == (SKILL_TWO_EX +30) || event.skill.id == (SKILL_TWO_EX +31))) {
			return false;
		}
		if (job == JOB_ZERK && (event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3 || event.skill.id == S_P4)) {
			return false;
		}

	});

	dispatch.hook('S_START_COOLTIME_SKILL', 3, (event) => {
		if (!enabled) return;
		if (event.skill.id == SKILL_VAMPIRIC_BLOW || event.skill.id == SKILL_VAMPIRIC_BLOW_CHAIN) {
			canVampBlow = false;
			setTimeout(function () {
				canVampBlow = true;
			}, event.cooldown);
		}
		if (event.skill.id == SKILL_CYCLONE && event.cooldown !=0) {
			clearTimeout(cycloneTimer2);
			cycloneTimer = true;
			cycloneTimer2 = setTimeout(function () { cycloneTimer = false; }, (event.cooldown -1000));
		}
		if (event.skill.id == SKILL_CYCLONE && event.cooldown ==0) {
			clearTimeout(godmode2);
			godmode1 = true;
			godmode2 = setTimeout(function () { godmode1 = false; },1750);
			cyclonecounter = cyclonecounter +1;
			clearTimeout(cyclonecounter11);
			cyclonecounter11 = setTimeout(function () { cyclonecounter = 0; },1750);
		}
		event.cooldown -= GLOBAL_LATENCY;
		return true;
	});


	dispatch.hook('C_NOTIFY_LOCATION_IN_ACTION', 4, (event) => {
		if (!enabled) return;
		if ((event.skill.id == SKILL_TWO_EX || event.skill.id == (SKILL_TWO_EX +30)) && !skill2dist) {
			skill2dist = 100 * event.stage;
		}
		if (event.skill.id == (SKILL_FLATTEN +30) && dstance) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: (SKILL_FLATTEN_2 +30),
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == (SKILL_FLATTEN) && dstance) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: (SKILL_FLATTEN_2),
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		//Fix sync
		/*
		if(event.skill.id == (SKILL_RAZE +30) ||  event.skill.id == (SKILL_RAZE +30) || event.skill.id == (SKILL_RAZE +31) || event.skill.id == (SKILL_RAZE +1)){
		setTimeout(function(){
		dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
		skill: event.skill.id,
		stage: event.stage,
		loc: {x: event.loc.x, y: event.loc.y, z: event.loc.z},
		w: event.w,
		});
		},100);
		}
		if(event.skill.id == SKILL_LETHAL_STRIKE_1 ||  event.skill.id == SKILL_LETHAL_STRIKE_2 || event.skill.id == SKILL_LETHAL_STRIKE_3 || event.skill.id == SKILL_LETHAL_STRIKE_4){
		setTimeout(function(){
		dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
		skill: event.skill.id,
		stage: event.stage,
		loc: {x: event.loc.x, y: event.loc.y, z: event.loc.z},
		w: event.w,
		});
		},100);
		}
		//Fix sync
		*/
		if (event.skill.id == (SKILL_RAZE +30) && dstance) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: (SKILL_RAZE_2 +30),
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		if (event.skill.id == (SKILL_RAZE) && dstance) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: (SKILL_RAZE_2),
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		/*if(event.skill.id == (SKILL_STAGGERING_STRIKE +30) && dstance){
		dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
		skill: (SKILL_STAGGERING_STRIKE_2 +30),
		stage: event.stage,
		loc: {x: event.loc.x, y: event.loc.y, z: event.loc.z},
		w: event.w,
		});
		}*/
		if (event.skill.id == (SKILL_STAGGERING_STRIKE) && dstance) {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: (SKILL_STAGGERING_STRIKE +30),
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		}
		setTimeout(function () {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: event.skill.id,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		},100);
		setTimeout(function () {
			dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
				skill: event.skill.id,
				stage: event.stage,
				loc: { x: event.loc.x, y: event.loc.y, z: event.loc.z },
				w: event.w,
			});
		},200);
	});

	dispatch.hook('C_NOTIFY_LOCATION_IN_DASH', 4, (event) => {
		if (!enabled) return;
		dashX = event.loc.x;
		dashY = event.loc.y;
		dashZ = event.loc.z;
	});

	dispatch.hook('S_INSTANT_DASH', 3, (event) => {
		if (!enabled) return;
		if (event.gameId === cid) {
			return false;
		}
	});


	dispatch.hook('S_PLAYER_STAT_UPDATE', 17, (event) => {
		aspd = (event.attackSpeed + event.attackSpeedBonus) / event.attackSpeed;
		if (event.hp ==0) {
			zerkzerk = false;
			zerkzerkfast = false;
		}
	});

	dispatch.hook('C_PLAYER_LOCATION', 5, (event) => {
		xloc = event.dest.x;
		yloc = event.dest.y;
		zloc = event.dest.z;
	});

	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67115120);
		if (!enabled) return;
		if (event.gameId !== cid) {
			return;
		}
		if (event.skill.id ==1080101) {
			disabSkill[SKILL_RETALIATE] = true;
			Ignore1 = true;
		}
	});
	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108496) console.log("error");
		if (!enabled) return;
		if (event.gameId !== cid) {
			return;
		}
		if (event.skill.id ==1080101) {
			disabSkill[SKILL_RETALIATE] = false;
			clearTimeout(Ignore2);
			Ignore2 = setTimeout(function () { Ignore1 = false; },400);
		}
	});
};
