<script setup>
import GameSwitcher from '@theme/components/GameSwitcher.vue'
import { Game } from '@theme/components/preferences'
</script>

# Event Handlers

<GameSwitcher :games="[Game.iw4, Game.iw5]" />

**TODO**

This will be a list of all available functions in event handlers.

- fadeIn
- fadeOut
- show
- hide
- showMenu
- hideMenu
- setColor
- open
- close
- escape
- closeForAllPlayers
- ingameOpen
- ingameClose
- setBackground
- setItemColor
- focusFirst
- setFocus
- setFocusByDvar
- setDvar
- exec
- execNow
- execOnDvarStringValue
- execOnDvarIntValue
- execOnDvarFloatValue
- execNowOnDvarStringValue
- execNowOnDvarIntValue
- execNowOnDvarFloatValue
- play
- scriptMenuResponse
- scriptMenuRespondOnDvarStringValue
- scriptMenuRespondOnDvarIntValue
- scriptMenuRespondOnDvarFloatValue
- setPlayerData
- setPlayerDataSplitscreen
- resetStatsConfirm
- resetStatsCancel
- setGameMode
- feederTop
- feederBottom
- showGamerCard
- openForGameType
- closeForGameType
- kickPlayer
- getKickPlayerQuestion
- partyUpdateMissingMapPackDvar
- togglePlayerMute
- resolveError
- lerp
- uiscript StartServer
- uiscript loadArenas
- uiscript loadGameInfo
- uiscript clearError
- uiscript Quit
- uiscript Controls
- uiscript Leave
- uiscript closeingame
- uiscript update
- uiscript startSingleplayer
- uiscript startMultiplayer
- uiscript getLanguage
- uiscript verifyLanguage
- uiscript updateLanguage
- uiscript mutePlayer
- uiscript openMenuOnDvar
- uiscript openMenuOnDvarNot
- uiscript closeMenuOnDvar
- uiscript closeMenuOnDvarNot
- uiscript setRecommended
- uiscript clearLoadErrorsSummary
- uiscript clearClientMatchData

<div class="game-only iw4">

IW4 specific:

- updateMail
- openMail
- deleteMail
- doMailLottery

IW4x specific:

- uiscript LoadMods
- uiscript RunMod
- uiscript ClearMods
- uiscript security_increase_cancel
- uiscript mod_download_cancel
- uiscript LoadFriends
- uiscript JoinFriend
- uiscript downloadDLC
- uiscript checkFirstLaunch
- uiscript visitWebsite
- uiscript visitWiki
- uiscript visitDiscord
- uiscript updateui_mousePitch
- uiscript ServerStatus
- uiscript UpdateFilter
- uiscript RefreshFilter
- uiscript RefreshServers
- uiscript JoinServer
- uiscript ServerSort
- uiscript CreateListFavorite
- uiscript CreateFavorite
- uiscript CreateCurrentServerFavorite
- uiscript DeleteFavorite
- uiscript nextStartupMessage
- uiscript UpdateClasses
- uiscript loadDemos
- uiscript launchDemo
- uiscript deleteDemo
- uiscript ApplyMap
- uiscript ApplyInitialMap
</div>

<div class="game-only iw5">

IW5 specific:

- forceClose
- execFirstClient
- execKeyPress
- deleteEliteCacFile
- integrateEliteCacFile
- setMatchRulesData
- loadMatchRulesDataFromPlayer
- saveMatchRulesDataToPlayer
- loadMatchRulesDataFromHistory
- loadMatchRulesDataDefaults
- setUsingMatchRulesData
- saveMatchRulesDedicatedServer
- loadMatchRulesDedicatedServer
- onlineVaultEditMetadata
- includeInMapRotation
- useCustomMapRotation
- useIntermissionTimer
- stopIntermissionTimer
- feederPageUp
- feederPageDown
- showCoopGamerCard
- showSplitscreenGamerCard
- reportPlayerOffensive
- reportPlayerExploiting
- reportPlayerCheating
- reportPlayerBoosting
- setCardIcon
- setCardTitle
- setCardIconNew
- setCardTitleNew
- setCardIconSplitScreen
- setCardTitleSplitScreen
- setCardIconNewSplitScreen
- setCardTitleNewSplitScreen
- purchasePrestigeTitle
- setProfileItemNew
- setProfileItemNewSplitScreen
- storePopupXuid
- getHostMigrateQuestion
- makeHost
- saveGameHide
- saveGameShow
- saveGameSetLocalBool
- saveDelay
- writeSave
- setSaveExecOnSuccess
- nextLevel
- disablePause
- enablePause
- runCompletionResolve
- clearCompletionResolve
- execWithResolve
- playMenuVideo
- setBackgroundVideo
- clearEntitlementNew
- setPastTitleRank
- setPastTitlePrestige
- anticheat_bancheck
- uiscript LoadSaveGames
- uiscript LoadGame
- uiscript SaveGame
- uiscript ForceSave
- uiscript DelSaveGame
- uiscript SaveGameSort
- uiscript playerStart
- uiscript saveComplete
- uiscript saveRevert
- uiscript resetvscroll
- uiscript RefreshLeaderboards
- uiscript ViewGamerCard
- uiscript OpenLeaderboard
- uiscript OpenLeaderboardExt
- uiscript ClearLeaderboard
- uiscript FriendStoreXUID
- uiscript FriendClearXUID
- uiscript FriendInvite
- uiscript FriendJoin
- uiscript FriendGamerCard
- uiscript FriendReportOffensive
- uiscript FriendReportExploiter
- uiscript FriendReportCheater
- uiscript FriendReportBooster
- uiscript RecentPlayerStoreXUID
- uiscript RecentPlayerClearXUID
- uiscript RecentPlayerGamerCard
- uiscript RecentPlayerFriendRequest
- uiscript RecentPlayerShowGroups
- uiscript RecentPlayerJoin
- uiscript RecentPlayerInvite
- uiscript RecentPlayerReportOffensive
- uiscript RecentPlayerReportExploiter
- uiscript RecentPlayerReportCheater
- uiscript RecentPlayerReportBooster
- uiscript FacebookStoreXUID
- uiscript FacebookClearXUID
- uiscript FacebookGamerCard
- uiscript FacebookFriendRequest
- uiscript FacebookPageRight
- uiscript FacebookPageLeft
- uiscript FacebookJoin
- uiscript FacebookInvite
- uiscript FacebookReportOffensive
- uiscript FacebookReportExploiter
- uiscript FacebookReportCheater
- uiscript FacebookReportBooster
- uiscript EliteClanStoreXUID
- uiscript EliteClanClearXUID
- uiscript EliteClanGamerCard
- uiscript EliteClanFriendRequest
- uiscript EliteClanJoin
- uiscript EliteClanInvite
- uiscript EliteClanReportOffensive
- uiscript EliteClanReportExploiter
- uiscript EliteClanReportCheater
- uiscript EliteClanReportBooster
- uiscript coopPlayerShowGroups
- uiscript simulateKeyPress
- uiscript commerceShowStore
- uiscript voteTypeMap
- uiscript voteMap
- uiscript voteGame
- uiscript RefreshServers
- uiscript RefreshFilter
- uiscript closeJoin
- uiscript StopRefresh
- uiscript TrimRecipeName
- uiscript ResetRecipeList
- uiscript SelectServer
- uiscript ShowCurrentServerTooltip
- uiscript voteTempBan
- uiscript addFavorite
- uiscript deleteFavorite
- uiscript PlayDemo
- uiscript SwitchSegmentTransition
- uiscript PreviewSegment
- uiscript MoveSegment
- uiscript DeleteSegment
- uiscript SetFocusOnSegmentButton
- uiscript PopulateLocalDemoFileInformation
- uiscript OnlineVault
- uiscript UpdateArenas
- uiscript SortChallengesTop
- uiscript xlaunchelitesearch
- uiscript xlaunchelitelaunch
- uiscript xlaunchelitestore
- uiscript LobbyShowGroups
- uiscript addPlayerProfiles
- uiscript createPlayerProfile
- uiscript deletePlayerProfile
- uiscript loadPlayerProfile
- uiscript selectActivePlayerProfile

</div>

- setLocalVar
- if / elseif / else
