import { supabase } from './supabaseClient';

export const TESTS_TABLE_NAME = 'TESTS';
export const USER_DONE_TEST_TABLE = 'user_done_test';
export const USER_INFO_TABLE = 'user_info';
export const MBTI_FEATURES_INFO = 'mbti_features_info';

// set result & test info to user with supabase
export const upsertUserDoneTest = async (mainUrl, resultType) => {
  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    // Check if the user and test combination already exists
    const { data: existingData, error: checkError } = await supabase
      .from(USER_DONE_TEST_TABLE)
      .select('*')
      .eq('user_id', data.user.id)
      .eq('test_query', mainUrl)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing data:', checkError);
      return;
    }
    if (existingData) {
      // If exists, update the result_query
      await supabase
        .from(USER_DONE_TEST_TABLE)
        .update({ result_query: resultType })
        .eq('id', existingData.id)
        .eq('user_id', data.user.id)
        .eq('test_query', mainUrl);
    } else {
      // If not exists, create a new row
      const upsertData = {
        user_id: data.user.id,
        test_query: mainUrl,
        result_query: resultType,
      };
      await supabase.from(USER_DONE_TEST_TABLE).upsert(upsertData);
    }
  }
};

// a function to check if the mainUrl exists in the TESTS table
export const checkIfMainUrlExists = async (mainUrl) => {
  const { data, error } = await supabase
    .from(TESTS_TABLE_NAME)
    .select('*')
    .eq('mainUrl', mainUrl);
  if (error) {
    return false;
  }
  return data.length > 0;
};

// a function to upsert a user's nickname in user_info table
export const upsertUserNickname = async (nickname) => {
  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    // Check if the nickname already exists
    const { data: nicknameData, error: nicknameError } = await supabase
      .from(USER_INFO_TABLE)
      .select('*')
      .eq('nickname', nickname)
      .single();
    if (nicknameError && nicknameError.code !== 'PGRST116') {
      console.error('Error checking existing nickname:', nicknameError);
      return nicknameError;
    }
    if (
      nicknameData &&
      data?.user?.id !== nicknameData?.user_id &&
      nickname !== ''
    ) {
      alert('Nickname EXIST!');
      return { error: '이미 존재하는 닉네임입니다.' };
    }

    const { data: existingData, error: checkError } = await supabase
      .from(USER_INFO_TABLE)
      .select('*')
      .eq('user_id', data.user.id)
      .single();
    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing data:', checkError);
      return checkError;
    }

    if (existingData) {
      const { data: existingSucces } = await supabase
        .from(USER_INFO_TABLE)
        .update({ nickname: nickname })
        .select()
        .eq('user_id', data.user.id);
      return existingSucces;
    } else {
      const upsertData = {
        user_id: data.user.id,
        nickname: nickname,
      };
      const { data: newSucces } = await supabase
        .from(USER_INFO_TABLE)
        .upsert(upsertData)
        .select();
      return newSucces;
    }
  }
};

// Get MBTI Hashtags for each type
export const getMBTIHashtags = async (type) => {
  const { data, error } = await supabase
    .from(MBTI_FEATURES_INFO)
    .select('type, hashtags')
    .eq('type', type);
  if (error) {
    console.error('Error fetching MBTI hashtags:', error);
    return [];
  }
  return data?.[0]?.hashtags || [];
};

// Check Admin User
export const checkAdminUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    const { data: userInfo } = await supabase
      .from(USER_INFO_TABLE)
      .select('id, email, admin')
      .eq('user_id', user.id);
    if (userInfo[0]?.admin) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};

// Get the number of All Users
export const getAllUserNumber = async () => {
  const { count } = await supabase
    .from(USER_INFO_TABLE)
    .select('*', { count: 'exact' });
  return count;
};
