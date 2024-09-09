import { supabase } from './supabaseClient';

export const TESTS_TABLE_NAME = 'TESTS';
export const USER_DONE_TEST_TABLE = 'user_done_test';

// set result & test info to user with supabase
export const upsertUserDoneTest = async (mainUrl, resultType) => {
  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    await supabase.from(USER_DONE_TEST_TABLE).upsert({
      user_id: data.user.id,
      test_query: mainUrl,
      result_query: resultType,
    });
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
